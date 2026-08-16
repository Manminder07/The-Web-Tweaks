import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { ArrowDown, Sparkles } from 'lucide-react'

const HeroThreeCanvas = lazy(() => import('./HeroThreeCanvas'))

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef(null)
  const sealRef = useRef(null)
  const headlineRef = useRef(null)
  const [loadCanvas, setLoadCanvas] = useState(false)

  useEffect(() => {
    // Only load Three.js on desktop non-reduced-motion devices when idle
    const isMobile = window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isMobile && !prefersReducedMotion) {
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(() => setLoadCanvas(true), { timeout: 1500 })
        return () => window.cancelIdleCallback(id)
      } else {
        const timer = setTimeout(() => setLoadCanvas(true), 300)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      // Split text reveal: using gsap.from() so content is naturally visible by default in plain CSS!
      const lines = headlineRef.current?.querySelectorAll('.split-line-inner')
      if (lines && lines.length > 0) {
        gsap.from(lines, {
          yPercent: 110,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          delay: 0.2,
        })
      }

      // Hero subtitle & kicker reveal
      const revealItems = heroRef.current?.querySelectorAll('.hero-fade-item')
      if (revealItems && revealItems.length > 0) {
        gsap.from(revealItems, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.4,
        })
      }

      // Scroll-linked extra rotation for circular seal badge
      if (sealRef.current) {
        gsap.to(sealRef.current, {
          rotation: 360,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: 'clamp(7rem, 14vw, 11rem)',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
      }}
    >
      {/* Three.js WebGL Decorative Background (Desktop Idle Only) */}
      {loadCanvas && (
        <Suspense fallback={null}>
          <HeroThreeCanvas />
        </Suspense>
      )}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Kicker */}
        <div className="hero-fade-item" style={{ marginBottom: '1.25rem' }}>
          <span
            className="font-script"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              letterSpacing: '0.02em',
            }}
          >
            hand-finished
          </span>
        </div>

        {/* Hero Mixed-Type Headline (Semantic H1) */}
        <h1
          ref={headlineRef}
          style={{
            marginBottom: '2rem',
            margin: 0,
            padding: 0,
            fontWeight: 'normal',
          }}
        >
          {/* Line 1: thin italic serif */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span
              className="split-line-inner font-editorial"
              style={{
                display: 'block',
                fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                lineHeight: 1.05,
                color: 'var(--ink)',
                fontWeight: 400,
              }}
            >
              A digital studio for
            </span>
          </span>

          {/* Line 2: huge outlined bold sans */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span
              className="split-line-inner font-sans-bold text-stroke"
              style={{
                display: 'block',
                fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            >
              BRANDS
            </span>
          </span>

          {/* Line 3: huge filled bold sans */}
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span
              className="split-line-inner font-sans-bold"
              style={{
                display: 'block',
                fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
                lineHeight: 0.9,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
              }}
            >
              WITH TEXTURE
            </span>
          </span>
        </h1>

        {/* Tagline Row + Seal Badge */}
        <div
          className="hero-fade-item"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {/* Tagline Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--bg)',
                backgroundColor: 'var(--gold)',
                padding: '0.25rem 0.625rem',
                borderRadius: '9999px',
                letterSpacing: '0.05em',
              }}
            >
              TWT
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                color: 'var(--ink)',
              }}
            >
              Small <strong style={{ color: 'var(--ember)', fontWeight: 700 }}>tweaks</strong>. Big difference.
            </p>
          </div>

          {/* Rotating Circular Seal Badge */}
          <div
            ref={sealRef}
            style={{
              position: 'relative',
              width: '110px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform',
            }}
          >
            {/* Outer Rotating Text Ring */}
            <svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              role="presentation"
              style={{
                width: '100%',
                height: '100%',
                animation: 'spinContinuous 20s linear infinite',
              }}
            >
              <path
                id="sealCirclePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fill="var(--dim)" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="1.2">
                <textPath href="#sealCirclePath">
                  THE WEB TWEAKS • DESIGN + DEVELOPMENT • SITE POLISH •
                </textPath>
              </text>
            </svg>

            {/* Inner Emblem */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg2)',
                border: '1px solid var(--line-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={18} color="var(--gold)" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <div className="hero-fade-item" style={{ marginBottom: '3.5rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              color: 'var(--dim)',
              lineHeight: 1.3,
            }}
          >
            for people who{' '}
            <span className="font-script" style={{ fontSize: '1.25em', color: 'var(--gold)' }}>
              notice
            </span>{' '}
            the details.
          </p>
        </div>

        {/* Hero Footer Row: CTAs & Studio Summary */}
        <div
          className="hero-fade-item"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* CTA Buttons with Magnetic Spring Effect */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            <motion.a
              href="#contact"
              className="btn-primary"
              aria-label="Start a project inquiry"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              data-view
            >
              <span>Start a Project</span>
              <Sparkles size={16} aria-hidden="true" />
            </motion.a>

            <motion.a
              href="#work"
              className="btn-secondary"
              aria-label="Scroll down to see selected work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <ArrowDown size={16} aria-hidden="true" />
              <span>See all work below</span>
            </motion.a>
          </div>

          {/* Studio Bio */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--dim)',
              lineHeight: 1.6,
              maxWidth: '520px',
              borderLeft: '2px solid var(--ember)',
              paddingLeft: '1.25rem',
            }}
          >
            We are a compact team of six specialist engineers & designers. From kickoff to launch, you work directly with the craftspeople building your site — zero bloated account layers, zero hand-offs.
          </p>
        </div>

      </div>
    </section>
  )
}

