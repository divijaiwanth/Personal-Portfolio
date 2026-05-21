import { motion } from 'framer-motion'
import { easeApple } from '../../lib/motion'

interface AnimatedLineProps {
  className?: string
  dark?: boolean
}

export function AnimatedLine({ className = '', dark = false }: AnimatedLineProps) {
  return (
    <motion.div
      className={`h-px origin-left ${dark ? 'bg-dark-text/20' : 'bg-border'} ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: easeApple }}
    />
  )
}
