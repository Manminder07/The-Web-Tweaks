import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus } from 'lucide-react'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0) // Default open first question

  const faqs = [
    {
      q: 'What is your typical project timeline from kickoff to launch?',
      a: 'Most comprehensive studio builds (strategy, bespoke UI design, custom React/Vite development, GSAP animation, and SEO pass) take 3 to 6 weeks. Simple landing page polish passes can be completed in as little as 10 to 14 days.',
    },
    {
      q: 'How does your pricing model work?',
      a: 'We work on a fixed-scope project model so there are zero surprise billing hours. Projects typically start at $4,500 for custom landing experiences and range up to $15,000+ for complex WebGL e-commerce builds.',
    },
    {
      q: 'What is included in your Ongoing Care & Polish retainer?',
      a: 'Our monthly care retainer ($850/mo) includes priority studio support, monthly performance auditing, sub-second speed tuning, continuous copy/asset updates, and 4 hours of custom feature development every month.',
    },
    {
      q: 'Are you locked into React, or can you work with Webflow or Shopify?',
      a: 'We are tech-agnostic craftspeople. While our custom web app stack relies on React/Next.js and GSAP for maximum control, we frequently build bespoke Webflow CMS templates and Shopify Liquid/Storefront API implementations.',
    },
    {
      q: 'Do you hand off designs to our internal dev team, or build them yourselves?',
      a: 'Both! We can either deliver production-ready React component libraries with full documentation for your engineering team, or handle the entire end-to-end full-stack build in-house.',
    },
    {
      q: 'What happens if we need post-launch adjustments?',
      a: 'Every project comes with 30 days of complimentary post-launch support. If you notice any responsive alignment edge cases or want subtle animation tweaks after going live, we fix them immediately at no charge.',
    },
  ]

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="section section-border-top" id="faq">
      <div className="container">
        
        <div className="eyebrow">Frequently Asked Questions</div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(3rem, 5vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Header Column */}
          <div>
            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
              }}
            >
              Clear answers before we <span className="font-script" style={{ color: 'var(--ember)' }}>begin.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--dim)', lineHeight: 1.6, maxWidth: '480px' }}>
              Have a question not listed here? Drop us a line at{' '}
              <a href="mailto:hello@thewebtweaks.com" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                hello@thewebtweaks.com
              </a>{' '}
              and we’ll reply within 24 hours.
            </p>
          </div>

          {/* Accordion Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.q}
                  className="card"
                  style={{
                    padding: '1.5rem 1.75rem',
                    background: 'var(--bg2)',
                    border: isOpen ? '1px solid var(--line-strong)' : '1px solid var(--line)',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--ink)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <span style={{ fontFamily: 'var(--font-sans-bold)', fontSize: '1.125rem', lineHeight: 1.3 }}>
                      {faq.q}
                    </span>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? 'var(--ember)' : 'rgba(243, 238, 227, 0.05)',
                        color: isOpen ? '#FFF' : 'var(--ink)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'background-color 0.3s ease, color 0.3s ease',
                      }}
                    >
                      {isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.9375rem',
                            color: 'var(--dim)',
                            lineHeight: 1.65,
                            marginTop: '1.25rem',
                            paddingTop: '1rem',
                            borderTop: '1px solid var(--line)',
                          }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
