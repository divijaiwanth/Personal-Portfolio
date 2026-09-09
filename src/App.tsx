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
import { CinematicBackdrop } from './components/ui/CinematicBackdrop'
import { useScrollToHash } from './hooks/useScrollToHash'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis()
    let frame = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
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
  const onHome = location.pathname === '/'
  useScrollToHash()
  useSmoothScroll()

  return (
    <HelmetProvider>
      <PageMeta path={location.pathname} />
      {onHome && <PersonSchema />}
      {/* The film belongs to the home hero only, and lives outside the route
          transition so it never remounts mid-animation. */}
      {onHome && <CinematicBackdrop />}
      <Navbar />
      <AnimatedOutlet />
      <Footer />
    </HelmetProvider>
  )
}
