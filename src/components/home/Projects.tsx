import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../../data/projects'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { ProjectCard } from '../work/ProjectCard'
import { SectionLabel } from '../ui/SectionLabel'

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const displayedProjects = showAll ? featured : featured.slice(0, 4)

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
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {featured.length > 4 && (
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-dark-text/20 bg-transparent px-8 py-3 text-sm font-medium text-dark-text transition-all hover:bg-dark-text hover:text-dark-bg"
            >
              <span>{showAll ? 'Show Less' : 'Show More'}</span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
