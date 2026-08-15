import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CurtainIntro() {
  const containerRef = useRef(null)
  const leftPanelRef = useRef(null)
  const rightPanelRef = useRef(null)
  const wordmarkRef = useRef(null)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    // Respect reduced motion or session flag
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setComplete(true)
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setComplete(true)
      },
    })

    // Wordmark fade & scale
    tl.to(wordmarkRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      delay: 0.6,
      ease: 'power2.inOut',
    })
    // Panels slide open
    .to([leftPanelRef.current, rightPanelRef.current], {
      xPercent: (i) => (i === 0 ? -100 : 100),
      duration: 1.1,
      ease: 'expo.inOut',
      stagger: 0,
    }, '-=0.2')

  }, [])

  if (complete) return null

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9990,
        pointerEvents: 'none',
        display: 'flex',
      }}
    >
      {/* Left Curtain */}
      <div
        ref={leftPanelRef}
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#0B0A08',
          borderRight: '1px solid var(--line)',
          willChange: 'transform',
        }}
      />

      {/* Right Curtain */}
      <div
        ref={rightPanelRef}
        style={{
          width: '50%',
          height: '100%',
          backgroundColor: '#0B0A08',
          borderLeft: '1px solid var(--line)',
          willChange: 'transform',
        }}
      />

      {/* Centered Wordmark */}
      <div
        ref={wordmarkRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9991,
          textAlign: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans-bold)',
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            letterSpacing: '0.1em',
            color: 'var(--ink)',
            textTransform: 'uppercase',
          }}
        >
          THE WEB TWEAKS<span style={{ color: 'var(--ember)' }}>.</span>
        </span>
        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '1.25rem',
            color: 'var(--gold)',
            marginTop: '0.5rem',
          }}
        >
          Small tweaks. Big difference.
        </p>
      </div>
    </div>
  )
}
