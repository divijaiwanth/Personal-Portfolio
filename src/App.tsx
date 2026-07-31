import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { useLocation, useRoutes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PageTransition } from './components/layout/PageTransition'
import { PageMeta } from './components/seo/PageMeta'
import { PersonSchema } from './components/seo/PersonSchema'
import { useScrollToHash } from './hooks/useScrollToHash'
import { gsap, ScrollTrigger } from './lib/gsap'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])
}

function AnimatedOutlet() {
  const location = useLocation()
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/work/:slug', element: <Work /> },
    { path: '/about', element: <AboutPage /> },
  ])

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>{element}</PageTransition>
    </AnimatePresence>
  )
}

export default function App() {
  const location = useLocation()
  useScrollToHash()
  useSmoothScroll()

  return (
    <HelmetProvider>
      <PageMeta path={location.pathname} />
      {location.pathname === '/' && <PersonSchema />}
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </HelmetProvider>
  )
}
