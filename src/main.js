import './style.scss'

import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  smoothTouch: true,
  touchMultiplier: 2,
})

gsap.registerPlugin(ScrollToPlugin)

// Scroll down function
function scrollDown() {
  // set .pusaka to display block
  document.querySelector('.pusaka').style.display = 'block'

  // Scroll down using GSAP
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: window.innerHeight, autoKill: false },
    ease: 'power2.inOut'
  })
}

window.scrollDown = scrollDown

// Animation frame loop for Lenis
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)