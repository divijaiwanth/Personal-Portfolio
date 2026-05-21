import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { AnimatedLine } from '../ui/AnimatedLine'
import { SectionLabel } from '../ui/SectionLabel'

export function Skills() {
  return (
    <section data-nav-theme="light" className="bg-bg px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Expertise</SectionLabel>

        <motion.div
          className="mt-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {site.skills.map((row, index) => (
            <motion.div key={row.category} variants={fadeUp}>
              <div className="grid gap-4 py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <p className="font-display text-xl text-ink md:col-span-4">{row.category}</p>
                <p className="font-sans text-base text-muted md:col-span-8">{row.items}</p>
              </div>
              {index < site.skills.length - 1 && <AnimatedLine />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
