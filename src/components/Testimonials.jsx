import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  const quotes = [
    {
      quote:
        'The Web Tweaks took our clunky legacy site and transformed it into a masterpiece of typography and motion. Their attention to sub-pixel alignment and loading speed is unprecedented.',
      name: 'Marcus Thorne',
      role: 'Founder & CEO, Aethel Spatial Audio',
      company: 'Aethel Audio',
      metric: '+48% Direct Conversions',
    },
    {
      quote:
        'Working with a boutique studio of 6 specialists meant zero telephone game. We spoke directly with the developer building our shaders, resulting in a launch 2 weeks ahead of schedule.',
      name: 'Claire Beauchamp',
      role: 'Creative Director, Monolith Atelier',
      company: 'Monolith Architectural Studio',
      metric: 'Site of the Day Winner',
    },
    {
      quote:
        'Small tweaks really do make a big difference. Our bounce rates plummeted, and our luxury customers constantly comment on how tactile and premium our site feels.',
      name: 'Julian Sterling',
      role: 'Head of Digital, Vespera Parfums',
      company: 'Vespera Fragrances',
      metric: '41% Lift in Order Value',
    },
  ]

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [quotes.length])

  const handleNext = () => setIndex((prev) => (prev + 1) % quotes.length)
  const handlePrev = () => setIndex((prev) => (prev - 1 + quotes.length) % quotes.length)

  return (
    <section className="section section-border-top" id="testimonials">
      <div className="container">
        
        <div className="eyebrow">Client Endorsements</div>

        <div
          className="card"
          style={{
            padding: 'clamp(2.5rem, 6vw, 4.5rem)',
            background: 'linear-gradient(135deg, var(--bg2) 0%, rgba(11, 10, 8, 0.95) 100%)',
            border: '1px solid var(--line-strong)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Quote Icon */}
          <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', opacity: 0.06, color: 'var(--gold)' }}>
            <Quote size={140} />
          </div>

          <div style={{ maxWidth: '820px', position: 'relative', zIndex: 1 }}>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
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
                    marginBottom: '2rem',
                  }}
                >
                  <span>VERIFIED CLIENT VERDICT</span>
                  <span>•</span>
                  <span>{quotes[index].metric}</span>
                </div>

                <blockquote
                  className="font-editorial"
                  style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                    lineHeight: 1.3,
                    color: 'var(--ink)',
                    marginBottom: '2.5rem',
                  }}
                >
                  “{quotes[index].quote}”
                </blockquote>

                <div>
                  <div style={{ fontFamily: 'var(--font-sans-bold)', fontSize: '1.25rem', color: 'var(--ink)' }}>
                    {quotes[index].name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--dim)', marginTop: '0.25rem' }}>
                    {quotes[index].role}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls Row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '3rem',
                borderTop: '1px solid var(--line)',
                paddingTop: '1.75rem',
              }}
            >
              {/* Dots Indicator */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {quotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    style={{
                      width: i === index ? '32px' : '10px',
                      height: '10px',
                      borderRadius: '9999px',
                      backgroundColor: i === index ? 'var(--ember)' : 'var(--line-strong)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'width 0.3s ease, background-color 0.3s ease',
                    }}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(243, 238, 227, 0.05)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(243, 238, 227, 0.05)',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s ease, color 0.2s ease',
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
