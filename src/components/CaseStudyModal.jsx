import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function CaseStudyModal({ project, onClose }) {
  // Lock body scroll & ESC key handler
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              zIndex: 9998,
            }}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            style={{
              position: 'fixed',
              top: '5%',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'min(900px, 92vw)',
              backgroundColor: 'var(--bg2)',
              border: '1px solid var(--line-strong)',
              borderRadius: 'var(--radius-lg)',
              zIndex: 9999,
              overflowY: 'auto',
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
            }}
            role="dialog"
            aria-modal="true"
            aria-label={`Case study details for ${project.title}`}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
                  {project.index} • {project.year}
                </div>
                <h2 className="font-editorial" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.15, color: 'var(--ink)' }}>
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                style={{
                  background: 'rgba(243, 238, 227, 0.05)',
                  border: '1px solid var(--line)',
                  color: 'var(--ink)',
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'background-color 0.2s ease',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Sub-header Banner Visual */}
            <div
              style={{
                width: '100%',
                height: '220px',
                borderRadius: 'var(--radius-md)',
                background: project.gradient || 'linear-gradient(135deg, var(--ember) 0%, var(--gold) 100%)',
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--line)',
              }}
            >
              <div
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: 'rgba(11, 10, 8, 0.8)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '9999px',
                  border: '1px solid var(--line-strong)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <Sparkles size={18} color="var(--gold)" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--ink)', fontWeight: 600 }}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Problem / Approach / Result Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2.5rem' }}>
              
              <div className="card" style={{ background: 'rgba(11,10,8,0.5)', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ember)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  01 / THE PROBLEM
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6 }}>
                  {project.problem}
                </p>
              </div>

              <div className="card" style={{ background: 'rgba(11,10,8,0.5)', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  02 / THE APPROACH
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6 }}>
                  {project.approach}
                </p>
              </div>

              <div className="card" style={{ background: 'rgba(11,10,8,0.5)', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ink)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  03 / THE RESULT
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6 }}>
                  {project.result}
                </p>
              </div>

            </div>

            {/* Metrics Row */}
            <div style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '1.5rem 0', marginBottom: '2.5rem' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Verified Performance Metrics
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                {project.metrics.map((m) => (
                  <div key={m} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-sans-bold)', fontSize: '1.125rem', color: 'var(--gold)' }}>
                    <CheckCircle2 size={18} color="var(--ember)" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips & CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map((s) => (
                  <span
                    key={s}
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
                    {s}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="btn-primary"
                style={{ fontSize: '0.875rem', padding: '0.75rem 1.5rem' }}
              >
                <span>Request Similar Build</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
