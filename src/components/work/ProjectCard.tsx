import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex h-full flex-col rounded-[20px] border border-hair bg-fill p-6 backdrop-blur-[8px] transition-colors duration-500 hover:border-cream/30 hover:bg-cream/[0.09] md:p-8"
    >
      <div className="mb-10 flex items-center justify-between md:mb-14">
        <span className="font-mono text-[11px] tracking-[0.16em] text-dim">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] tracking-[0.12em] text-dim">{project.year}</span>
      </div>

      <h3 className="font-display text-[22px] font-medium tracking-[-0.02em] md:text-2xl">
        {project.title}
      </h3>

      <p className="mt-3 text-[clamp(14px,1vw,16px)] leading-[1.6] text-soft">{project.shortDescription}</p>

      <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5 pt-6 border-t border-hair">
        {project.techStack.slice(0, 4).map((tech) => (
          <span key={tech} className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-dim">
            {tech}
          </span>
        ))}
      </div>

      <span className="mt-6 inline-flex items-center gap-2 text-[13px] text-soft transition-colors duration-300 group-hover:text-cream">
        View project
        <svg
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-1 motion-reduce:transform-none"
          aria-hidden
        >
          <path d="M3 11 11 3" />
          <path d="M5 3h6v6" />
        </svg>
      </span>
    </Link>
  )
}
