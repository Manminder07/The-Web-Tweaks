import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mode, setMode] = useState('default') // 'default', 'hover', 'view'
  const cursorRef = useRef(null)
  const modeRef = useRef('default')
  const isVisibleRef = useRef(false)

  useEffect(() => {
    // Disable on mobile / touch devices
    const isMobileOrTouch = window.innerWidth < 901 || window.matchMedia('(pointer: coarse)').matches
    if (isMobileOrTouch) return

    let mouseX = -100
    let mouseY = -100
    let currentX = -100
    let currentY = -100
    let animFrameId
    let hasMoved = false

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (!hasMoved) {
        hasMoved = true
        currentX = mouseX
        currentY = mouseY
        if (cursorRef.current) {
          cursorRef.current.style.opacity = '1'
        }
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    const handleMouseEnter = () => {
      if (hasMoved && cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    const animate = () => {
      if (hasMoved) {
        // Smooth lerp follow
        currentX += (mouseX - currentX) * 0.18
        currentY += (mouseY - currentY) * 0.18

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
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    animFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
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
        opacity: 0,
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
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


