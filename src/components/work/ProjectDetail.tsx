import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getAdjacentProjects, projects, type Project } from '../../data/projects'
import { GitHubIcon } from '../ui/SocialIcons'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <article className="relative z-10 min-h-screen bg-base px-6 pb-24 pt-32 md:px-10 md:pt-40 lg:px-16 xl:pr-80">
      <div className="mx-auto max-w-shell">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[13.5px] text-dim transition-colors duration-300 hover:text-cream"
        >
          <ArrowLeft size={15} aria-hidden />
          Back to work
        </Link>

        <header className="mt-10 border-b border-hair pb-12">
          <Eyebrow className="rise" style={{ animationDelay: '0ms' }}>
            {project.role}
          </Eyebrow>
          <h1
            className="rise mt-6 max-w-4xl font-display text-[clamp(40px,6vw,86px)] font-medium leading-[0.94] tracking-[-0.04em]"
            style={{ animationDelay: '160ms' }}
          >
            {project.title}
          </h1>
          <p
            className="rise mt-6 max-w-2xl text-[16px] leading-[1.6] text-soft"
            style={{ animationDelay: '300ms' }}
          >
            {project.shortDescription}
          </p>
        </header>

        <dl className="flex flex-wrap gap-x-14 gap-y-7 border-b border-hair py-8">
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Year</dt>
            <dd className="mt-2 text-[14.5px] text-cream">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Role</dt>
            <dd className="mt-2 text-[14.5px] text-cream">{project.role}</dd>
          </div>
          <div className="min-w-[240px] flex-1">
            <dt className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-soft"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
          {project.githubUrl && (
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Code</dt>
              <dd className="mt-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14.5px] text-cream transition-opacity duration-300 hover:opacity-70"
                >
                  GitHub <GitHubIcon size={13} />
                </a>
              </dd>
            </div>
          )}
          {project.liveUrl && (
            <div>
              <dt className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Live</dt>
              <dd className="mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[14.5px] text-cream transition-opacity duration-300 hover:opacity-70"
                >
                  Visit site <ExternalLink size={13} />
                </a>
              </dd>
            </div>
          )}
        </dl>

        <Reveal className="max-w-editorial py-16 md:py-20">
          {project.longDescription.split('\n\n').map((para, index) => (
            <p
              key={`${project.slug}-para-${index}`}
              className="mb-6 text-[16px] leading-[1.72] text-soft last:mb-0"
            >
              {para}
            </p>
          ))}
        </Reveal>

        {project.images.length > 0 && (
          <div className="space-y-4 pb-16">
            {project.images.map((src, index) => (
              <img
                key={`${project.slug}-img-${index}`}
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full rounded-[20px] border border-hair"
                loading="lazy"
              />
            ))}
          </div>
        )}

        <nav className="flex justify-between gap-8 border-t border-hair pt-10">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="group min-w-0 text-left">
              <span className="font-mono text-[10.5px] uppercase tracking-caps text-dim">
                Previous
              </span>
              <p className="mt-2 font-display text-lg font-medium tracking-[-0.02em] text-soft transition-colors duration-300 group-hover:text-cream">
                ← {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link to={`/work/${next.slug}`} className="group min-w-0 text-right">
              <span className="font-mono text-[10.5px] uppercase tracking-caps text-dim">Next</span>
              <p className="mt-2 font-display text-lg font-medium tracking-[-0.02em] text-soft transition-colors duration-300 group-hover:text-cream">
                {next.title} →
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      <aside className="fixed bottom-0 right-0 top-0 z-20 hidden w-72 overflow-y-auto border-l border-hair bg-base px-7 pt-32 xl:block">
        <Eyebrow>All projects</Eyebrow>
        <ul className="mt-6 space-y-1">
          {projects.map((p) => {
            const isActive = p.slug === project.slug
            return (
              <li key={p.slug}>
                <Link
                  to={`/work/${p.slug}`}
                  className={`block truncate rounded-lg px-3 py-2 text-[13.5px] transition-colors duration-300 ${
                    isActive
                      ? 'bg-cream/[0.09] text-cream'
                      : 'text-dim hover:bg-cream/[0.05] hover:text-cream'
                  }`}
                >
                  {p.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </article>
  )
}
