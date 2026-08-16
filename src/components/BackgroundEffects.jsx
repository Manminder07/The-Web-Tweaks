import React, { useEffect, useRef } from 'react'

export default function BackgroundEffects() {
  const smokeEmberRef = useRef(null)
  const smokeGoldRef = useRef(null)

  useEffect(() => {
    let animId = null
    const handleMouseMove = (e) => {
      if (window.innerWidth < 901) return
      if (animId) cancelAnimationFrame(animId)

      animId = requestAnimationFrame(() => {
        const { clientX, clientY } = e
        const xOffset = (clientX / window.innerWidth - 0.5) * 40
        const yOffset = (clientY / window.innerHeight - 0.5) * 40

        if (smokeEmberRef.current) {
          smokeEmberRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`
        }
        if (smokeGoldRef.current) {
          smokeGoldRef.current.style.transform = `translate(${-xOffset * 1.2}px, ${-yOffset * 1.2}px)`
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animId) cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <div ref={smokeEmberRef} className="smoke-blob smoke-ember" aria-hidden="true" />
      <div ref={smokeGoldRef} className="smoke-blob smoke-gold" aria-hidden="true" />
    </>
  )
}

