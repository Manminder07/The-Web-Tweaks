import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

export default function Work({ onSelectProject }) {
  const projects = [
    {
      id: 'work-01',
      index: '02',
      year: '2026',
      title: 'Monolith Architectural Atelier',
      category: 'Brand Systems & Editorial Web',
      description: 'A dark, minimalist portfolio showcasing high-end architectural works with fluid page transitions and custom typographic rhythm.',
      problem: 'Monolith needed a site that reflected their ultra-precise minimalist concrete aesthetics without feeling cold or sterile.',
      approach: 'We developed a warm-toned near-black color space with subtle ambient noise texture and typography inspired by Swiss editorial grids.',
      result: 'Won Site of the Day honors and generated 14 high-budget private residential leads within 90 days.',
      metrics: ['14 Ultra High Net Worth Leads', 'Site of the Day Winner', '800ms Average Page Load'],
      stack: ['Vite', 'React', 'GSAP ScrollTrigger', 'Lenis', 'Tailwind CSS'],
      gradient: 'linear-gradient(135deg, rgba(217, 164, 65, 0.25) 0%, rgba(11, 10, 8, 0.95) 100%)',
    },
    {
      id: 'work-02',
      index: '03',
      year: '2025',
      title: 'Solis Energy Engine',
      category: 'Interactive WebGL Dashboard',
      description: 'Real-time solar grid analytics platform featuring responsive 3D WebGL data visualizations and instant control telemetry.',
      problem: 'Solis had complex industrial data stream API outputs that users found overwhelming and incomprehensible on mobile dashboards.',
      approach: 'We simplified their UI into clean glassmorphism cards and rendered interactive 3D solar arrays using Three.js shader geometry.',
      result: 'Increased daily active operator retention by 52% and reduced technical onboarding time by half.',
      metrics: ['+52% Daily Active Users', '50% Faster Onboarding', '60fps Canvas Render'],
      stack: ['Next.js', 'Three.js', 'React', 'Tailwind CSS', 'Recharts'],
      gradient: 'linear-gradient(135deg, rgba(232, 92, 31, 0.3) 0%, rgba(217, 164, 65, 0.15) 100%)',
    },
    {
      id: 'work-03',
      index: '04',
      year: '2025',
      title: 'Vespera Fragrances',
      category: 'Luxury E-Commerce & Scent Finder',
      description: 'An immersive digital perfume counter featuring an interactive scent quiz, custom GLSL liquid animations, and seamless Shopify checkout.',
      problem: 'Selling luxury niche fragrances online without physical samples required a deep sensory digital experience.',
      approach: 'We crafted custom GLSL fluid simulation shaders that react to cursor speed and matched them with evocative sound design.',
      result: 'Average order value increased by 41% and quiz completion rate hit 88%.',
      metrics: ['+41% Average Order Value', '88% Quiz Completion Rate', '2.8x Conversion Rate'],
      stack: ['Shopify Storefront API', 'WebGL', 'GSAP', 'React', 'Lenis'],
      gradient: 'linear-gradient(135deg, rgba(128, 90, 213, 0.25) 0%, rgba(232, 92, 31, 0.2) 100%)',
    },
  ]

  return (
    <section className="section section-border-top" id="work">
      <div className="container">
        
        <div className="eyebrow">03 — Selected Work</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <h2
              className="font-editorial"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                lineHeight: 1.1,
                marginBottom: '1rem',
              }}
            >
              Crafted with <span className="font-script" style={{ color: 'var(--gold)' }}>obsessive detail.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.0625rem', color: 'var(--dim)', maxWidth: '580px' }}>
              Explore a selection of recent digital builds. Each project represents a bespoke solution tailored to the brand’s unique identity.
            </p>
          </div>
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <ProjectTiltCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

// 3D Tilt Card Helper Component
function ProjectTiltCard({ project, onSelectProject }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (window.innerWidth < 901) return
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    // Calculate tilt angles (max ~10 deg)
    const rotateX = (-y / rect.height) * 12
    const rotateY = (x / rect.width) * 12
    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onClick={() => onSelectProject(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelectProject(project)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View project details: ${project.title}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-view
      className="card card-interactive"
      style={{
        cursor: 'pointer',
        padding: '1.75rem',
        background: 'var(--bg2)',
        border: '1px solid var(--line)',
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{ y: -6 }}
    >
      {/* Project Visual Banner */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 10',
          borderRadius: 'var(--radius-sm)',
          background: project.gradient,
          border: '1px solid var(--line)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--gold)',
            backgroundColor: 'rgba(11, 10, 8, 0.8)',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            border: '1px solid var(--line)',
          }}
        >
          {project.year}
        </div>

        <span style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.5rem', color: 'var(--ink)', textAlign: 'center', padding: '0 1rem' }}>
          {project.title.split(' ')[0]}
        </span>
      </div>

      {/* Project Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--ember)', textTransform: 'uppercase' }}>
            {project.category}
          </span>
          <h3 className="font-editorial" style={{ fontSize: '1.625rem', color: 'var(--ink)', marginTop: '0.25rem' }}>
            {project.title}
          </h3>
        </div>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(243, 238, 227, 0.05)',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--gold)',
            flexShrink: 0,
          }}
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9375rem', color: 'var(--dim)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        {project.description}
      </p>

      {/* Stack Badges */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {project.stack.slice(0, 3).map((s) => (
          <span
            key={s}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6875rem',
              color: 'var(--dim)',
              backgroundColor: 'rgba(243, 238, 227, 0.04)',
              border: '1px solid var(--line)',
              padding: '0.25rem 0.625rem',
              borderRadius: '4px',
            }}
          >
            {s}
          </span>
        ))}
      </div>

    </motion.div>
  )
}
