import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { AnimatedLine } from '../ui/AnimatedLine'

export function About() {
  return (
    <section id="about" data-nav-theme="light" className="bg-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedLine className="mb-16" />

        <motion.div
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div className="lg:col-span-7" variants={fadeUp}>
            <p className="text-balance font-sans text-[1.375rem] leading-relaxed text-ink md:text-2xl">
              {site.bio.lead}
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
              {site.bio.detail}
            </p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:col-span-5"
            variants={fadeUp}
          >
            <div
              className="aspect-[4/5] w-full max-w-md bg-gradient-to-br from-accent/20 via-border to-gold/20"
              role="img"
              aria-label="Portrait placeholder"
            />
          </motion.div>
        </motion.div>

        <AnimatedLine className="my-16" />

        <motion.ul
          className="flex flex-wrap gap-x-12 gap-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {site.aboutStats.map((stat) => (
            <motion.li key={stat.label} variants={fadeUp}>
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </p>
              <p className="mt-1 font-sans text-sm text-ink">{stat.value}</p>
            </motion.li>
          ))}
        </motion.ul>

        <AnimatedLine className="mt-16" />
      </div>
    </section>
  )
}
