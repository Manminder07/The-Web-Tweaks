import React from 'react'
import { CheckCircle2, Users } from 'lucide-react'

export default function Studio() {
  const expertise = [
    { title: 'Design', desc: 'Bespoke UI/UX, editorial layout system, typography curation, and high-fidelity prototypes.' },
    { title: 'Development', desc: 'Custom React/Vite & Next.js architectures, bulletproof HTML semantics, and optimized performance.' },
    { title: 'Brand Direction', desc: 'Digital visual identities, custom icon sets, color palettes, and motion guidelines.' },
    { title: 'Motion', desc: 'GSAP scroll choreography, Lenis smooth scrolling, Three.js WebGL shaders, and micro-interactions.' },
  ]

  const teamAvatars = [
    { name: 'Alex Rivera', role: 'Design Lead', bg: '#E85C1F' },
    { name: 'Elena Rostova', role: 'WebGL / Creative Dev', bg: '#D9A441' },
    { name: 'Marcus Vance', role: 'Full-Stack Engineer', bg: '#4A5568' },
    { name: 'Sofia Chen', role: 'Motion & UX', bg: '#805AD5' },
    { name: 'Liam O’Connor', role: 'Brand Strategist', bg: '#319795' },
    { name: 'Maya Lin', role: 'Accessibility Lead', bg: '#D69E2E' },
  ]

  return (
    <section class="section section-border-top" id="studio">
      <div class="container">
        
        <div class="eyebrow">01 — The Studio</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Expertise List */}
          <div>
            <h2
              class="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
              }}
            >
              We refine until it feels <span class="font-script" style={{ color: 'var(--gold)' }}>effortless.</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.125rem',
                color: 'var(--dim)',
                lineHeight: 1.7,
                marginBottom: '3rem',
              }}
            >
              The Web Tweaks was founded on a simple principle: generic templates feel lifeless because they lack micro-polish. We spend the extra hours tuning easing curves, font hierarchies, and responsive grid alignment so your site leaves a lasting impression.
            </p>

            {/* Core Expertise Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {expertise.map((item, idx) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid var(--line)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      color: 'var(--ember)',
                      marginTop: '0.2rem',
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-sans-bold)',
                        fontSize: '1.375rem',
                        marginBottom: '0.375rem',
                        color: 'var(--ink)',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9375rem',
                        color: 'var(--dim)',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: People / Team Block */}
          <div
            class="card"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--bg2)',
              border: '1px solid var(--line-strong)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(232, 92, 31, 0.1)',
                border: '1px solid var(--ember)',
                color: 'var(--ember)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              <Users size={14} />
              <span>THE TEAM</span>
            </div>

            <h3
              class="font-editorial"
              style={{
                fontSize: '2rem',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              Six specialists, zero bureaucracy.
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9375rem',
                color: 'var(--dim)',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
              }}
            >
              We deliberately keep our studio small so every project receives direct senior design and engineering focus from day one.
            </p>

            {/* Avatar Stack */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.25rem' }}>
                {teamAvatars.map((person, i) => (
                  <div
                    key={person.name}
                    title={`${person.name} — ${person.role}`}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: person.bg,
                      color: '#FFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-sans-bold)',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      border: '3px solid var(--bg2)',
                      marginLeft: i === 0 ? 0 : '-12px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                    }}
                  >
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8125rem',
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <CheckCircle2 size={16} color="var(--ember)" />
                6 specialist engineers & designers crafting bespoke digital experiences
              </p>
            </div>

            {/* Studio Principles */}
            <div
              style={{
                backgroundColor: 'rgba(11, 10, 8, 0.6)',
                borderRadius: 'var(--radius-sm)',
                padding: '1.25rem',
                border: '1px solid var(--line)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Studio Guarantee
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink)' }}>
                <li>✦ 100% bespoke code, zero bloated visual builders</li>
                <li>✦ Sub-second load times & 95+ Lighthouse score</li>
                <li>✦ Direct Slack/Discord channel with your builders</li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
