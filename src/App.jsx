import React, { useEffect, useState } from 'react'
import { initSmoothScroll } from './utils/smoothScroll'
import BackgroundEffects from './components/BackgroundEffects'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeaturedProject from './components/FeaturedProject'
import Studio from './components/Studio'
import Process from './components/Process'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyModal from './components/CaseStudyModal'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const scrollInstance = initSmoothScroll()
    return () => {
      if (scrollInstance && scrollInstance.destroy) scrollInstance.destroy()
    }
  }, [])

  return (
    <>
      {/* Texture & Background Effects */}
      <BackgroundEffects />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Page Sections */}
      <main id="main-content">
        <Hero />
        <Marquee />
        <FeaturedProject onSelectProject={setSelectedProject} />
        <Studio />
        <Process />
        <Services />
        <Work onSelectProject={setSelectedProject} />
        <Testimonials />
        <Faq />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}