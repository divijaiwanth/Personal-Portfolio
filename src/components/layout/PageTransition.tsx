import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { pageTransition } from '../../lib/motion'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    /* z-10 keeps every page above the fixed film, scrim and vignette layers. */
    <motion.div
      className="relative z-10"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
    >
      {children}
    </motion.div>
  )
}
