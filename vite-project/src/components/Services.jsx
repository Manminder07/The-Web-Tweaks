import React from 'react'

export default function Services() {
  const serviceList = [
    {
      title: 'Brand & Product Design',
      desc: 'High-impact UI design systems, custom component libraries, responsive UX flows, and interactive Figma prototypes.',
      tags: ['Figma', 'Design Systems', 'Typography', 'UX Architecture'],
    },
    {
      title: 'Front-End & Full-Stack Engineering',
      desc: 'Performant web applications engineered in React, Vite, and Next.js with robust state management and microsecond responsiveness.',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Bespoke E-Commerce Builds',
      desc: 'Tailored Shopify Storefronts and headless commerce experiences designed to convert visitors into loyal brand advocates.',
      tags: ['Shopify API', 'Headless Commerce', 'Stripe', 'Conversion UX'],
    },
    {
      title: 'Ongoing Care & Motion Polish',
      desc: 'Continuous performance optimization, GSAP motion enhancements, accessibility passes, and dedicated monthly studio retainer support.',
      tags: ['GSAP', 'Three.js', 'Lighthouse 95+', 'Care Retainers'],
    },
  ]

  const toolChips = [
    'Figma',
    'Webflow',
    'React',
    'Shopify',
    'GSAP',
    'Three.js',
    'Tailwind CSS',
    'Next.js',
    'Lenis',
    'Motion',
  ]

  return (
    <section class="section section-border-top" id="services">
      <div class="container">
        
        <div class="eyebrow">02 — What We Do</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Services Header & List */}
          <div>
            <h2
              class="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              Every tweak engineered for <span class="font-script" style={{ color: 'var(--ember)' }}>conversion.</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                color: 'var(--dim)',
                lineHeight: 1.7,
                marginBottom: '2.5rem',
              }}
            >
              We bridge the gap between aesthetic editorial design and rigorous software engineering. Here is how we elevate your digital presence:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {serviceList.map((service, i) => (
                <div
                  key={service.title}
                  class="card"
                  style={{
                    padding: '1.75rem',
                    background: 'var(--bg2)',
                    border: '1px solid var(--line)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-sans-bold)', fontSize: '1.25rem', color: 'var(--ink)' }}>
                      {service.title}
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)' }}>
                      0{i + 1}
                    </span>
                  </div>

                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {service.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {service.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6875rem',
                          color: 'var(--ink)',
                          backgroundColor: 'rgba(243, 238, 227, 0.04)',
                          border: '1px solid var(--line)',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '4px',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hand-built Isometric SVG Desk Flat-Lay Illustration */}
          <div>
            <div
              class="card"
              style={{
                padding: '2rem',
                background: 'linear-gradient(145deg, var(--bg2) 0%, rgba(11,10,8,0.9) 100%)',
                border: '1px solid var(--line-strong)',
                position: 'sticky',
                top: '6rem',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.08em' }}>
                Studio Workstation — Flat Lay
              </div>

              {/* Hand-built Isometric SVG Illustration */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(11, 10, 8, 0.7)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--line)',
                  padding: '1rem',
                }}
              >
                <svg
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }}
                >
                  {/* Desk Surface Grid Base */}
                  <rect x="20" y="20" width="360" height="360" rx="16" fill="#161310" stroke="rgba(243,238,227,0.12)" strokeWidth="2" />
                  <path d="M 20 100 H 380 M 20 180 H 380 M 20 260 H 380 M 20 340 H 380" stroke="rgba(243,238,227,0.04)" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M 100 20 V 380 M 180 20 V 380 M 260 20 V 380 M 340 20 V 380" stroke="rgba(243,238,227,0.04)" strokeWidth="1" strokeDasharray="4 4" />

                  {/* 1. Studio Monitor */}
                  <g id="monitor">
                    {/* Monitor Stand */}
                    <rect x="180" y="160" width="40" height="30" rx="4" fill="#0B0A08" stroke="#948C7C" strokeWidth="1.5" />
                    {/* Monitor Screen Frame */}
                    <rect x="110" y="60" width="180" height="110" rx="8" fill="#0B0A08" stroke="#E85C1F" strokeWidth="2.5" />
                    {/* Display Bezel Content */}
                    <rect x="118" y="68" width="164" height="94" rx="4" fill="#161310" />
                    {/* Code Lines on Screen */}
                    <rect x="126" y="78" width="60" height="6" rx="3" fill="#D9A441" />
                    <rect x="126" y="92" width="100" height="4" rx="2" fill="#F3EEE3" opacity="0.8" />
                    <rect x="136" y="102" width="80" height="4" rx="2" fill="#E85C1F" opacity="0.9" />
                    <rect x="136" y="112" width="120" height="4" rx="2" fill="#948C7C" opacity="0.6" />
                    <rect x="126" y="124" width="70" height="4" rx="2" fill="#D9A441" opacity="0.7" />
                    <circle cx="266" cy="144" r="6" fill="#E85C1F" />
                  </g>

                  {/* 2. Vintage Camera */}
                  <g id="camera" transform="translate(50, 240)">
                    <rect x="0" y="0" width="90" height="60" rx="6" fill="#0B0A08" stroke="#F3EEE3" strokeWidth="2" />
                    <rect x="10" y="0" width="30" height="8" rx="2" fill="#D9A441" />
                    <circle cx="45" cy="30" r="20" fill="#161310" stroke="#E85C1F" strokeWidth="2.5" />
                    <circle cx="45" cy="30" r="12" fill="#0B0A08" stroke="#D9A441" strokeWidth="1.5" />
                    <circle cx="41" cy="26" r="3" fill="#F3EEE3" opacity="0.6" />
                  </g>

                  {/* 3. Designer Pencil */}
                  <g id="pencil" transform="translate(260, 220) rotate(-25)">
                    <path d="M 0 0 L 140 0 L 155 10 L 140 20 L 0 20 Z" fill="#D9A441" stroke="#0B0A08" strokeWidth="1.5" />
                    {/* Eraser */}
                    <rect x="0" y="0" width="20" height="20" fill="#E85C1F" />
                    {/* Lead Tip */}
                    <path d="M 140 0 L 155 10 L 140 20 Z" fill="#0B0A08" />
                  </g>

                  {/* 4. Stack of Design Books */}
                  <g id="books" transform="translate(260, 290)">
                    {/* Bottom Book */}
                    <rect x="0" y="14" width="100" height="24" rx="3" fill="#161310" stroke="#948C7C" strokeWidth="1.5" />
                    <line x1="8" y1="18" x2="8" y2="34" stroke="#D9A441" strokeWidth="2" />
                    {/* Top Book */}
                    <rect x="10" y="0" width="90" height="18" rx="3" fill="#E85C1F" stroke="#F3EEE3" strokeWidth="1.5" />
                    <line x1="18" y1="4" x2="18" y2="14" stroke="#F3EEE3" strokeWidth="2" />
                  </g>

                  {/* 5. Espresso Coffee Cup */}
                  <g id="coffeecup" transform="translate(180, 270)">
                    <circle cx="30" cy="30" r="28" fill="#161310" stroke="#948C7C" strokeWidth="1.5" />
                    <circle cx="30" cy="30" r="20" fill="#0B0A08" stroke="#E85C1F" strokeWidth="2" />
                    {/* Coffee Fluid */}
                    <circle cx="30" cy="30" r="16" fill="#3D2616" />
                    <path d="M 24 24 Q 30 20 36 24 T 30 36" fill="none" stroke="#D9A441" strokeWidth="1.5" opacity="0.8" />
                    {/* Steam Trails */}
                    <path d="M 22 4 Q 26 -4 22 -12" fill="none" stroke="rgba(243,238,227,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 38 2 Q 42 -6 38 -14" fill="none" stroke="rgba(243,238,227,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.125rem', color: 'var(--gold)' }}>
                  Hand-crafted SVG geometry
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)' }}>
                  #0B0A08 • #E85C1F • #D9A441
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Row of Tool Chips */}
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: '2.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
            ENGINEERING & DESIGN TOOLKIT
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
            {toolChips.map((chip) => (
              <div
                key={chip}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  color: 'var(--ink)',
                  backgroundColor: 'var(--bg2)',
                  border: '1px solid var(--line-strong)',
                  padding: '0.625rem 1.25rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--ember)' }} />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
