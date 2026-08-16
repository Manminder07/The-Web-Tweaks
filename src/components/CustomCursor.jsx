import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mode, setMode] = useState('default') // 'default', 'hover', 'view'
  const cursorRef = useRef(null)
  const modeRef = useRef('default')

  useEffect(() => {
    // If reduced motion is requested, don't show custom cursor
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let mouseX = -100
    let mouseY = -100
    let currentX = -100
    let currentY = -100
    let animFrameId
    let isMouseActive = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!isMouseActive) {
        isMouseActive = true
        currentX = mouseX
        currentY = mouseY
        if (cursorRef.current) {
          cursorRef.current.style.display = 'flex'
          cursorRef.current.style.opacity = '1'
        }
      }
    }

    const handleTouchStart = () => {
      isMouseActive = false
      if (cursorRef.current) {
        cursorRef.current.style.display = 'none'
        cursorRef.current.style.opacity = '0'
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    const handleMouseEnter = () => {
      if (isMouseActive && cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    const animate = () => {
      if (isMouseActive) {
        // High-precision smooth follow
        currentX += (mouseX - currentX) * 0.2
        currentY += (mouseY - currentY) * 0.2

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
        }

        // Detect hover state
        const target = document.elementFromPoint(mouseX, mouseY)
        if (target) {
          const viewEl = target.closest('[data-view]')
          const linkEl = target.closest('a, button, [role="button"], input, textarea, select')

          let nextMode = 'default'
          if (viewEl) {
            nextMode = 'view'
          } else if (linkEl) {
            nextMode = 'hover'
          }

          if (nextMode !== modeRef.current) {
            modeRef.current = nextMode
            setMode(nextMode)
          }
        }
      }

      animFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    animFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="custom-cursor-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        display: 'none',
        opacity: 0,
        transition: 'opacity 0.2s ease',
        willChange: 'transform',
      }}
      aria-hidden="true"
    >
      <div
        className={`custom-cursor-inner ${
          mode === 'view' ? 'cursor-view' : mode === 'hover' ? 'cursor-hover' : 'cursor-dot'
        }`}
      >
        {mode === 'view' && <span className="cursor-view-text">VIEW</span>}
      </div>
    </div>
  )
}
