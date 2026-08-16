import React from 'react'
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        backgroundColor: '#070605',
        borderTop: '1px solid var(--line-strong)',
        paddingTop: 'clamp(4rem, 8vw, 6rem)',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        
        {/* Top Footer Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {/* Brand Column */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: 'var(--ink)',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg2)',
                  border: '1.5px solid var(--line-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="46" stroke="var(--ember)" strokeWidth="4"/>
                  <path d="M25 35 L38 68 L50 45 L62 68 L75 35" stroke="var(--gold)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-sans-bold)',
                  fontSize: '1.125rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                THE WEB TWEAKS<span style={{ color: 'var(--ember)' }}>.</span>
              </span>
            </a>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6, maxWidth: '320px' }}>
              A digital studio for brands with texture. Small, precise web design & development tweaks that add up to a big result.
            </p>
          </div>

          {/* Section Navigation Links */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
              NAVIGATION
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="#studio" style={{ color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  01 — The Studio
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  02 — What We Do
                </a>
              </li>
              <li>
                <a href="#work" style={{ color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  03 — Selected Work
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: 'var(--ink)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  04 — Start a Project
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.25rem', letterSpacing: '0.08em' }}>
              CONNECT
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <a href="mailto:hello@thewebtweaks.com" style={{ color: 'var(--ember)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.875rem' }}>
                  hello@thewebtweaks.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dim)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dim)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--dim)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '0.9375rem' }}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)' }}>
            © {new Date().getFullYear()} The Web Tweaks Studio. All rights reserved. Hand-crafted with React & GSAP.
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--gold)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  )
}
