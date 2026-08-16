import React, { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const containerRef = useRef(null)
  const innerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const container = containerRef.current
    const inner = innerRef.current
    const text = textRef.current
    if (!container || !inner) return

    let mouseX = -100
    let mouseY = -100
    let currentX = -100
    let currentY = -100
    let currentMode = 'default'
    let isVisible = false
    let animFrameId

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isVisible) {
        isVisible = true
        currentX = mouseX
        currentY = mouseY
        container.style.opacity = '1'
      }
    }

    const onMouseLeave = () => {
      isVisible = false
      container.style.opacity = '0'
    }

    const onMouseEnter = () => {
      isVisible = true
      container.style.opacity = '1'
    }

    const onTouchStart = () => {
      isVisible = false
      container.style.opacity = '0'
    }

    const animate = () => {
      if (isVisible) {
        // High-precision smooth follow
        currentX += (mouseX - currentX) * 0.22
        currentY += (mouseY - currentY) * 0.22

        container.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

        // Detect hover state
        const target = document.elementFromPoint(mouseX, mouseY)
        let nextMode = 'default'

        if (target) {
          if (target.closest('[data-view]')) {
            nextMode = 'view'
          } else if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
            nextMode = 'hover'
          }
        }

        if (nextMode !== currentMode) {
          currentMode = nextMode
          if (nextMode === 'view') {
            inner.className = 'custom-cursor-inner cursor-view'
            if (text) text.style.display = 'block'
          } else if (nextMode === 'hover') {
            inner.className = 'custom-cursor-inner cursor-hover'
            if (text) text.style.display = 'none'
          } else {
            inner.className = 'custom-cursor-inner cursor-dot'
            if (text) text.style.display = 'none'
          }
        }
      }

      animFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)
    animFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="custom-cursor-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        opacity: 0,
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.2s ease',
      }}
      aria-hidden="true"
    >
      <div ref={innerRef} className="custom-cursor-inner cursor-dot">
        <span ref={textRef} className="cursor-view-text" style={{ display: 'none' }}>
          VIEW
        </span>
      </div>
    </div>
  )
}
