import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { cardHover, fadeUp } from '../../lib/motion'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={fadeUp}>
      <motion.div variants={cardHover} initial="rest" whileHover="hover">
        <Link
          to={`/work/${project.slug}`}
          className="group block border-b border-dark-text/15 py-10 transition-colors hover:bg-white/[0.03] md:py-14"
        >
          <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-8">
              <div className="flex items-baseline gap-4">
                <h3 className="font-display text-3xl text-dark-text transition-colors group-hover:text-brand-red md:text-4xl lg:text-5xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-dark-text/50">{project.year}</span>
              </div>
              <p className="mt-4 max-w-2xl text-base text-dark-text/70">
                {project.shortDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 md:text-right">
              <span className="inline-block border-l-2 border-transparent pl-0 font-sans text-sm text-brand-red opacity-0 transition-all duration-300 group-hover:border-brand-red group-hover:pl-4 group-hover:opacity-100">
                View →
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  )
}
