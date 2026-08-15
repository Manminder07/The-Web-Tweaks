import React from 'react'

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover & Map',
      subtitle: 'Kickoff to Architecture',
      description: 'We audit your current brand presence, articulate the exact visual mood, and lock down every page schema before writing a line of code.',
      details: ['Brand moodboards & tone alignment', 'Content strategy & copy outline', 'Performance & stack selection'],
    },
    {
      num: '02',
      title: 'Design & Prototype',
      subtitle: 'Figma to Motion Previews',
      description: 'We construct high-fidelity Figma components alongside interactive Motion & GSAP web prototypes so you feel real physics early.',
      details: ['Bespoke editorial layouts', 'Micro-interaction storyboards', 'Interactive browser prototype'],
    },
    {
      num: '03',
      title: 'Build & Polish',
      subtitle: 'Full-stack & Shader Engineering',
      description: 'We craft production code in React/Vite/Next.js with Lenis smooth scroll, GSAP choreography, and responsive mobile breakpoints.',
      details: ['Semantic HTML & WCAG AAA contrast', 'GSAP ScrollTrigger choreography', 'Sub-second load optimization'],
    },
    {
      num: '04',
      title: 'Launch & Care',
      subtitle: 'Deployment & Ongoing Support',
      description: 'We handle domain deployment, DNS, SSL, OpenGraph previews, and provide 30 days of complimentary post-launch tweaking.',
      details: ['Production CDN edge deployment', 'Lighthouse & SEO audit pass', '30-day dedicated polish guarantee'],
    },
  ]

  return (
    <section class="section section-border-top" id="process">
      <div class="container">
        
        <div class="eyebrow">How We Work</div>

        <div style={{ marginBottom: '4rem' }}>
          <h2
            class="font-editorial"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            A clear timeline with <span class="font-script" style={{ color: 'var(--gold)' }}>no surprises.</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--dim)', maxWidth: '600px' }}>
            Four structured phases designed to deliver bespoke craft within weeks, keeping you informed at every milestone.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.num}
              class="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem 1.75rem',
                borderTop: '2px solid var(--line)',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <div>
                {/* Header Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--ember)',
                    }}
                  >
                    {step.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {step.subtitle}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-sans-bold)',
                    fontSize: '1.375rem',
                    marginBottom: '0.75rem',
                    color: 'var(--ink)',
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    color: 'var(--dim)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Detail bullet points */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '1rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {step.details.map((d) => (
                    <li
                      key={d}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--ink)',
                        opacity: 0.85,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span style={{ color: 'var(--ember)' }}>›</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
