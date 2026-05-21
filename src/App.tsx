import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import { useLocation, useRoutes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { PageTransition } from './components/layout/PageTransition'
import { PageMeta } from './components/seo/PageMeta'
import { PersonSchema } from './components/seo/PersonSchema'
import { useScrollToHash } from './hooks/useScrollToHash'
import { AboutPage } from './pages/AboutPage'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

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
