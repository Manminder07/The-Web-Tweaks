import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initSmoothScroll() {
  // Disable automatic browser scroll restoration so reloads reset to top
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }

  // Clear any URL hash on reload to prevent auto-scrolling to anchors
  if (window.location.hash) {
    window.history.replaceState(null, null, window.location.pathname)
  }

  window.scrollTo(0, 0)

  // Disable if user explicitly requested reduced motion or on small mobile screens
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isSmallMobile = window.innerWidth < 768
  if (prefersReducedMotion || isSmallMobile) {
    return null
  }

  // Initialize Lenis with smooth wheel inertia
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1.0,
  })

  // Force Lenis to position 0 immediately
  lenis.scrollTo(0, { immediate: true })

  // Synchronize ScrollTrigger with Lenis scroll stream
  lenis.on('scroll', ScrollTrigger.update)

  // Drive Lenis RAF loop via GSAP Ticker for perfect synchronization
  const updateTicker = (time) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(updateTicker)
  gsap.ticker.lagSmoothing(0)

  // Smooth scroll for anchor navigation links
  const handleAnchorClick = (e) => {
    const target = e.target.closest('a[href^="#"]')
    if (target) {
      const href = target.getAttribute('href')
      if (href && href !== '#' && href.startsWith('#')) {
        const elem = document.querySelector(href)
        if (elem) {
          e.preventDefault()
          lenis.scrollTo(elem, { offset: -20, duration: 1.2 })
        }
      }
    }
  }

  document.addEventListener('click', handleAnchorClick)

  // Refresh ScrollTrigger when web fonts or DOM finishes layout
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh()
    })
  }

  return {
    lenis,
    destroy: () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    },
  }
}
