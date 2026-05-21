import { motion } from 'framer-motion'
import { site } from '../../data/site'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { SectionLabel } from '../ui/SectionLabel'

export function Experience() {
  return (
    <section data-nav-theme="dark" className="bg-dark-bg px-6 py-24 text-dark-text md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionLabel dark>Experience</SectionLabel>

        <motion.div
          className="relative mt-16 border-l border-dark-text/20 pl-8 md:pl-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {site.experience.map((item) => (
            <motion.div key={item.company} className="relative pb-16 last:pb-0" variants={fadeUp}>
              <span
                className="absolute left-0 top-2 h-2.5 w-2.5 -translate-x-[calc(2rem+1px+50%)] rounded-full bg-gold md:-translate-x-[calc(3rem+1px+50%)]"
                aria-hidden
              />
              <h3 className="font-display text-2xl md:text-3xl">{item.company}</h3>
              <p className="mt-1 font-sans text-lg text-dark-text/80">{item.role}</p>
              <p className="mt-1 font-mono text-xs text-dark-text/50">{item.dates}</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-text/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
