import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { site } from '../../data/site'
import { easeApple } from '../../lib/motion'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section
      ref={ref}
      data-nav-theme="dark"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-dark-bg text-dark-text"
    >
      <div className="grain-overlay absolute inset-0 z-10" aria-hidden />

      <motion.div style={{ y }} className="relative z-20 px-6 pb-28 pt-32 md:px-10 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            className="font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeApple }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl font-sans text-lg text-dark-text/70 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: easeApple }}
          >
            <em>{site.tagline}</em>
          </motion.p>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-6 z-20 md:left-10" aria-hidden>
        <motion.div
          className="h-16 w-px bg-dark-text/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easeApple }}
          style={{ originY: 0 }}
        />
        <motion.div
          className="mx-auto h-2 w-2 -translate-x-[3px] rounded-full bg-brand-red"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
