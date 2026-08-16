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

  // Check if reduced motion is requested or mobile touch device
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isMobileTouch = window.innerWidth < 901 || window.matchMedia('(pointer: coarse)').matches
  if (prefersReducedMotion || isMobileTouch) {
    return null
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
  })

  // Force Lenis to position 0 immediately
  lenis.scrollTo(0, { immediate: true })

  // Update ScrollTrigger on Lenis scroll
  lenis.on('scroll', ScrollTrigger.update)

  // Add Lenis's requestAnimationFrame to GSAP Ticker
  const updateTicker = (time) => {
    lenis.raf(time * 1000)
  }

  gsap.ticker.add(updateTicker)
  gsap.ticker.lagSmoothing(0)

  return {
    lenis,
    destroy: () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    },
  }
}

