import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [mode, setMode] = useState('default') // 'default', 'hover', 'view'
  const [isVisible, setIsVisible] = useState(false)

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

      setPos({ x: currentX, y: currentY })

      // Check hovered element
      const target = document.elementFromPoint(mouseX, mouseY)
      if (target) {
        const viewEl = target.closest('[data-view]')
        const linkEl = target.closest('a, button, [role="button"], input, textarea, select')

        if (viewEl) {
          setMode('view')
        } else if (linkEl) {
          setMode('hover')
        } else {
          setMode('default')
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
      class={`custom-cursor ${
        mode === 'view' ? 'cursor-view' : mode === 'hover' ? 'cursor-hover' : 'cursor-dot'
      }`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      aria-hidden="true"
    >
      {mode === 'view' && <span class="cursor-view-text">VIEW</span>}
    </div>
  )
}
