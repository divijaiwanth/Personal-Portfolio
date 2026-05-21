import { motion } from 'framer-motion'
import { projects } from '../../data/projects'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { ProjectCard } from '../work/ProjectCard'
import { SectionLabel } from '../ui/SectionLabel'

export function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="work" data-nav-theme="dark" className="bg-dark-bg px-6 py-24 text-dark-text md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <SectionLabel dark>Selected Work</SectionLabel>
        </motion.div>

        <motion.div
          className="mt-12 border-t border-dark-text/15"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
