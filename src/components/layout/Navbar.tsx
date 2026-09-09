import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavbarState } from '../../hooks/useNavbarState'
import { Wordmark } from '../ui/Wordmark'

const leftLinks = [
  { to: '/about', label: 'About' },
  { to: '/#work', label: 'Work' },
]

const rightLinks = [
  { to: '/#toolkit', label: 'Toolkit' },
  { to: '/#experience', label: 'Experience' },
  { to: '/#contact', label: 'Contact' },
]

const allLinks = [...leftLinks, ...rightLinks]

export function Navbar() {
  const { scrolled } = useNavbarState()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const goToTop = () => {
    setMenuOpen(false)
    if (location.pathname !== '/') return
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'border-b border-hair bg-base/80 backdrop-blur-[16px]' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto grid w-full max-w-[1000px] grid-cols-[1fr_auto_1fr] items-center gap-8 px-6 py-5 md:gap-12 md:px-10">
          <ul className="hidden items-center justify-end gap-8 md:flex lg:gap-10">
            {leftLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="rise text-[13.5px] text-soft transition-colors duration-300 hover:text-cream"
                  style={{ animationDelay: `${i * 72}ms` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/"
            onClick={goToTop}
            className="rise justify-self-center transition-opacity duration-300 hover:opacity-70"
            style={{ animationDelay: '144ms' }}
            aria-label="Back to top"
          >
            <Wordmark variant="nav" className="text-cream" />
          </Link>

          <ul className="hidden items-center justify-start gap-8 md:flex lg:gap-10">
            {rightLinks.map((link, i) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="rise text-[13.5px] text-soft transition-colors duration-300 hover:text-cream"
                  style={{ animationDelay: `${(i + 2) * 72}ms` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="justify-self-end text-cream md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-base px-8 pt-28 text-cream md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-7">
              {allLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className="font-display text-3xl font-medium tracking-[-0.03em]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
