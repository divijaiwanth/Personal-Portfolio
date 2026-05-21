import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { useNavbarState } from '../../hooks/useNavbarState'
import { useNavbarTheme } from '../../hooks/useNavbarTheme'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/#work', label: 'Work' },
  { to: '/#contact', label: 'Contact' },
]

export function Navbar() {
  const { scrolled } = useNavbarState()
  const { overDark } = useNavbarTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  const useLightText = onHome ? overDark : false
  const showBar = scrolled || !onHome || !overDark

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          useLightText
            ? showBar
              ? 'border-b border-dark-text/10 bg-dark-bg/80 text-dark-text backdrop-blur-[16px]'
              : 'bg-transparent text-dark-text'
            : 'border-b border-border/60 bg-bg/85 text-ink backdrop-blur-[16px]'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Logo asLink variant="nav" />

          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm tracking-wide transition-opacity hover:opacity-60"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden"
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
            className="fixed inset-0 z-40 flex flex-col bg-dark-bg px-8 pt-28 text-dark-text md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.to}
                    className="font-display text-4xl"
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
