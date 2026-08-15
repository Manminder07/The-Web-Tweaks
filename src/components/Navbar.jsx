import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const drawerRef = useRef(null)

  const navItems = [
    { num: '01', title: 'the studio', subtitle: 'Who we are', href: '#studio' },
    { num: '02', title: 'what we do', subtitle: 'Services & Craft', href: '#services' },
    { num: '03', title: 'selected work', subtitle: 'Case studies', href: '#work' },
    { num: '04', title: 'start a project', subtitle: 'Get in touch', href: '#contact' },
  ]

  // Track scroll position for header glassmorphism border
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll & handle Escape key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 990,
          padding: '1.25rem 0',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
          backgroundColor: scrolled ? 'rgba(11, 10, 8, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
        }}
      >
        <div class="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo Mark + Wordmark */}
          <a
            href="#"
            aria-label="The Web Tweaks Home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.875rem',
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            {/* Monogram Badge */}
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg2)',
                border: '1.5px solid var(--line-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                transition: 'border-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
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

          {/* Desktop Nav Items (≥820px) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
            class="desktop-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  color: 'var(--ink)',
                  transition: 'color 0.2s ease',
                }}
                class="nav-tab-link"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--gold)',
                  }}
                >
                  {item.num}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6875rem',
                      color: 'var(--dim)',
                      lineHeight: 1.2,
                    }}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </a>
            ))}
          </nav>

          {/* Action Row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Direct CTA Icon Button */}
            <a
              href="#contact"
              aria-label="Start a project with The Web Tweaks"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--ember)',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, background-color 0.2s ease',
              }}
              title="Start a project"
            >
              <ArrowUpRight size={20} />
            </a>

            {/* Mobile Hamburger Toggle (<820px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              class="mobile-menu-toggle"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg2)',
                border: '1px solid var(--line-strong)',
                color: 'var(--ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(8px)',
                zIndex: 994,
              }}
            />

            {/* Drawer Content */}
            <motion.div
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(380px, 88vw)',
                backgroundColor: 'var(--bg2)',
                borderLeft: '1px solid var(--line-strong)',
                zIndex: 995,
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              <div>
                {/* Header inside drawer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--gold)', letterSpacing: '0.1em' }}>
                    NAVIGATION
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--ink)',
                      cursor: 'pointer',
                      padding: '0.5rem',
                    }}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Nav Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {navItems.map((item) => (
                    <a
                      key={item.num}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1rem',
                        textDecoration: 'none',
                        color: 'var(--ink)',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--ember)' }}>
                        {item.num}
                      </span>
                      <div>
                        <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.75rem', lineHeight: 1.1 }}>
                          {item.title}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
                          {item.subtitle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer CTA */}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  class="btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Start a Project</span>
                  <Sparkles size={16} />
                </a>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', marginTop: '1rem', textAlign: 'center' }}>
                  hello@thewebtweaks.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Nav Responsive Styling */}
      <style>{`
        @media (max-width: 819px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        @media (min-width: 820px) {
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        .nav-tab-link:hover {
          color: var(--gold) !important;
        }
      `}</style>
    </>
  )
}
