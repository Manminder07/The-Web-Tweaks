import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

export default function FeaturedProject({ onSelectProject }) {
  const visualRef = useRef(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })

  const featuredData = {
    id: 'featured-01',
    index: '01 / FEATURED CASE STUDY',
    year: '2026',
    title: 'Aethel — Spatial Audio E-Commerce & Brand Engine',
    category: 'E-Commerce · WebGL Audio Visualizer',
    description:
      'We redesigned Aethel’s digital storefront from the ground up, reducing bounce rate by 34% through a custom WebGL product previewer and micro-animations calibrated down to the millisecond.',
    problem:
      'Aethel had an incredible acoustic product, but their standard Shopify template rendered like a generic electronics store, failing to convey the luxury tactile experience.',
    approach:
      'We built an interactive 3D soundwave visualizer using WebGL, combined with bespoke typography and subtle haptic scroll triggers that respond to audio playback cues.',
    result:
      '34% reduction in bounce rate, 2.4x increase in session duration, and a 48% boost in direct checkout conversions in the first 60 days.',
    metrics: ['+48% Direct Checkout', '34% Reduced Bounce', '60fps WebGL Render'],
    stack: ['React', 'Three.js', 'GSAP', 'Shopify Storefront API', 'Motion'],
  }

  const handleMouseMove = (e) => {
    if (window.innerWidth < 901) return
    const rect = visualRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) / 15
    const y = (e.clientY - rect.top - rect.height / 2) / 15
    setParallax({ x, y })
  }

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 })
  }

  return (
    <section className="section section-border-top" id="featured">
      <div className="container">
        
        {/* Eyebrow Header */}
        <div className="eyebrow">Spotlight</div>

        {/* Featured Card Wrapper */}
        <div
          onClick={() => onSelectProject(featuredData)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onSelectProject(featuredData)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`View featured project: ${featuredData.title}`}
          data-view
          className="card"
          style={{
            cursor: 'pointer',
            padding: 'clamp(2rem, 5vw, 4rem)',
            background: 'linear-gradient(135deg, var(--bg2) 0%, rgba(22, 19, 16, 0.95) 100%)',
            border: '1px solid var(--line-strong)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2.5rem, 5vw, 4.5rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Content Column */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--gold)',
                }}
              >
                <span>{featuredData.index}</span>
                <span>•</span>
                <span style={{ color: 'var(--dim)' }}>{featuredData.year}</span>
              </div>

              <h2
                className="font-editorial"
                style={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                  color: 'var(--ink)',
                }}
              >
                {featuredData.title}
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.0625rem',
                  color: 'var(--dim)',
                  lineHeight: 1.7,
                  marginBottom: '2rem',
                  maxWidth: '540px',
                }}
              >
                {featuredData.description}
              </p>

              {/* Tag Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem', marginBottom: '2.5rem' }}>
                {featuredData.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--ink)',
                      backgroundColor: 'rgba(243, 238, 227, 0.06)',
                      border: '1px solid var(--line)',
                      padding: '0.375rem 0.875rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button Link */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: 'var(--ember)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                <span>Explore Full Case Study</span>
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Right Interactive Visual Column */}
            <div
              ref={visualRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                position: 'relative',
                aspectRatio: '4 / 3',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'radial-gradient(circle at 30% 30%, rgba(232,92,31,0.25), rgba(217,164,65,0.1) 60%, var(--bg) 100%)',
                border: '1px solid var(--line)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Parallax Floating Mesh Graphic */}
              <motion.div
                animate={{ x: parallax.x, y: parallax.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                style={{
                  width: '75%',
                  height: '75%',
                  borderRadius: 'var(--radius-md)',
                  border: '1px dashed var(--gold)',
                  background: 'rgba(22, 19, 16, 0.6)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              >
                {/* Dashed Rotating Ring Badge */}
                <div
                  style={{
                    position: 'relative',
                    width: '90px',
                    height: '90px',
                    marginBottom: '1rem',
                  }}
                >
                  <svg
                    viewBox="0 0 100 100"
                    style={{
                      width: '100%',
                      height: '100%',
                      animation: 'spinContinuous 14s linear infinite',
                    }}
                  >
                    <circle cx="50" cy="50" r="45" fill="none" stroke="var(--gold)" strokeWidth="2" strokeDasharray="6 6" />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Sparkles size={24} color="var(--ember)" />
                  </div>
                </div>

                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--ink)' }}>
                  AETHEL AUDIO
                </span>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.125rem', color: 'var(--gold)' }}>
                  click to reveal details
                </span>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}


