import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { fadeUp } from '../../lib/motion'
import { gsap } from '../../lib/gsap'
import { GeometricCover } from '../ui/GeometricCover'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const imgRef = useRef<HTMLDivElement>(null)

  const handleEnter = () => {
    if (!imgRef.current) return
    gsap.to(imgRef.current, { scale: 1.08, duration: 0.5, ease: 'power3.out' })
  }

  const handleLeave = () => {
    if (!imgRef.current) return
    gsap.to(imgRef.current, { scale: 1, duration: 0.5, ease: 'power3.out' })
  }

  return (
    <motion.article variants={fadeUp}>
      <Link
        to={`/work/${project.slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group block"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <div ref={imgRef} className="absolute inset-0">
            <GeometricCover seed={project.slug} className="h-full w-full" />
          </div>
          <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-dark-bg/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-dark-text opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
            View project →
          </span>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl text-dark-text transition-colors group-hover:text-brand-red md:text-3xl">
            {project.title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-dark-text/50">{project.year}</span>
        </div>
        <p className="mt-2 max-w-lg text-sm text-dark-text/65">{project.shortDescription}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Link>
    </motion.article>
  )
}
