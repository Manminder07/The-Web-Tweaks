import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Send, CheckCircle2, Mail, MapPin, Clock, Calendar } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$5k - $10k',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) return
    setSubmitted(true)
  }

  return (
    <section className="section section-border-top" id="contact">
      <div className="container">
        
        <div className="eyebrow">04 — Start a Project</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 6vw, 6rem)',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Inquiry Form / Prompt */}
          <div>
            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}
            >
              Let’s make something <span className="font-script" style={{ color: 'var(--gold)' }}>unforgettable.</span>
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.0625rem',
                color: 'var(--dim)',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
              }}
            >
              Tell us about your brand, your timeline, and what you’d like to build. We review every submission personally and respond within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card"
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(232, 92, 31, 0.08)',
                  border: '1px solid var(--ember)',
                  textAlign: 'center',
                }}
              >
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'var(--ember)', color: '#FFF', marginBottom: '1rem' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-editorial" style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: 'var(--ink)' }}>
                  Inquiry Received!
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)' }}>
                  Thank you, {formData.name}. We’ve received your notes and will be in touch at <strong>{formData.email}</strong> shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    type="text"
                    required
                    aria-required="true"
                    placeholder="e.g. Marcus Thorne"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      backgroundColor: 'var(--bg2)',
                      border: '1px solid var(--line-strong)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    type="email"
                    required
                    aria-required="true"
                    placeholder="marcus@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      backgroundColor: 'var(--bg2)',
                      border: '1px solid var(--line-strong)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>

                {/* Estimated Budget */}
                <div>
                  <label htmlFor="contact-budget" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Estimated Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      backgroundColor: 'var(--bg2)',
                      border: '1px solid var(--line-strong)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="< $5k">&lt; $5,000 (Small Polish Pass)</option>
                    <option value="$5k - $10k">$5,000 - $10,000 (Full Site Redesign)</option>
                    <option value="$10k - $20k">$10,000 - $20,000 (Complex WebGL / E-Commerce)</option>
                    <option value="$20k+">$20,000+ (Enterprise Flagship Build)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Project Brief & Goals
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a little about your brand, current challenges, and desired launch date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      backgroundColor: 'var(--bg2)',
                      border: '1px solid var(--line-strong)',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                >
                  <span>Send Studio Brief</span>
                  <Send size={16} />
                </motion.button>

              </form>
            )}

          </div>

          {/* Right Column: Studio Detail Block */}
          <div
            className="card"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              backgroundColor: 'var(--bg2)',
              border: '1px solid var(--line-strong)',
            }}
          >
            {/* Booking Status Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.375rem 0.875rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(217, 164, 65, 0.1)',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--gold)', boxShadow: '0 0 10px var(--gold)' }} />
              <span>BOOKING STATUS: ACCEPTING Q3 / Q4 PROJECTS</span>
            </div>

            <h3 className="font-editorial" style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--ink)' }}>
              Studio Direct Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(243,238,227,0.05)', color: 'var(--ember)' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase' }}>
                    DIRECT EMAIL
                  </div>
                  <a
                    href="mailto:hello@thewebtweaks.com"
                    style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)', textDecoration: 'none' }}
                  >
                    hello@thewebtweaks.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(243,238,227,0.05)', color: 'var(--gold)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase' }}>
                    LOCATION
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)' }}>
                    San Francisco, CA & Remote Worldwide
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(243,238,227,0.05)', color: 'var(--ember)' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase' }}>
                    GUARANTEED RESPONSE
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)' }}>
                    Under 24 Hours (Mon – Fri)
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ padding: '0.625rem', borderRadius: '50%', backgroundColor: 'rgba(243,238,227,0.05)', color: 'var(--gold)' }}>
                  <Calendar size={20} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--dim)', textTransform: 'uppercase' }}>
                    CAPACITY
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ink)' }}>
                    Max 2 client projects simultaneously
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
