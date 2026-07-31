import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { AnimatedLine } from '../ui/AnimatedLine'
import { Marquee } from '../ui/Marquee'
import { SectionLabel } from '../ui/SectionLabel'

const allSkills = site.skills.flatMap((row) => row.items.split(',').map((item) => item.trim()))

export function Skills() {
  return (
    <section data-nav-theme="light" className="bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel>Expertise</SectionLabel>
      </div>

      <div className="mt-10 border-y border-border py-6">
        <Marquee>
          {allSkills.map((skill) => (
            <span
              key={skill}
              className="font-display text-2xl text-ink/80 md:text-3xl"
            >
              {skill}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
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
