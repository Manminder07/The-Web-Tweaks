import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mode, setMode] = useState('default') // 'default', 'hover', 'view'
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef(null)
  const modeRef = useRef('default')

  useEffect(() => {
    // Hide if mobile screen or touch device
    const isMobileOrTouch = window.innerWidth < 901 || window.matchMedia('(pointer: coarse)').matches
    if (isMobileOrTouch) return

    setIsVisible(true)

    let mouseX = -100
    let mouseY = -100
    let currentX = -100
    let currentY = -100
    let animFrameId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Lerp easing for smooth follow
      currentX += (mouseX - currentX) * 0.18
      currentY += (mouseY - currentY) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`
      }

      // Check hovered element
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

      animFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${
        mode === 'view' ? 'cursor-view' : mode === 'hover' ? 'cursor-hover' : 'cursor-dot'
      }`}
      style={{
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    >
      {mode === 'view' && <span className="cursor-view-text">VIEW</span>}
    </div>
  )
}

