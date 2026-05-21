import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../ui/SocialIcons'
import { Link, useNavigate } from 'react-router-dom'
import { getAdjacentProjects, type Project } from '../../data/projects'
import { fadeUp } from '../../lib/motion'
import { Tag } from '../ui/Tag'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const navigate = useNavigate()
  const { prev, next } = getAdjacentProjects(project.slug)
  const hasCover = Boolean(project.coverImage)

  const goToWork = () => {
    navigate('/#work')
  }

  return (
    <article className="bg-bg">
      <div data-nav-theme="light" className="bg-bg px-6 pt-28 md:px-10">
        <button
          type="button"
          onClick={goToWork}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} />
          Back to work
        </button>
      </div>

      <div
        data-nav-theme="dark"
        className="relative mt-10 flex min-h-[36vh] w-full items-end overflow-hidden bg-dark-bg px-6 pb-10 md:min-h-[40vh] md:px-10 md:pb-12"
        style={
          hasCover
            ? {
                backgroundImage: `url(${project.coverImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/85 to-dark-bg/55" aria-hidden />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.h1
            className="font-display text-5xl text-dark-text drop-shadow-sm md:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      <div data-nav-theme="light" className="mx-auto max-w-7xl border-b border-border px-6 py-8 md:px-10">
        <dl className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-xs uppercase tracking-wider text-muted">
          <div>
            <dt className="mb-1">Year</dt>
            <dd className="font-sans text-sm normal-case text-ink">{project.year}</dd>
          </div>
          <div>
            <dt className="mb-1">Role</dt>
            <dd className="font-sans text-sm normal-case text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="mb-1">Stack</dt>
            <dd className="flex flex-wrap gap-2 font-sans normal-case">
              {project.techStack.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </dd>
          </div>
          {project.githubUrl && (
            <div>
              <dt className="mb-1">Code</dt>
              <dd>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-sm normal-case text-ink hover:text-gold"
                >
                  GitHub <GitHubIcon size={14} />
                </a>
              </dd>
            </div>
          )}
          {project.liveUrl && (
            <div>
              <dt className="mb-1">Live</dt>
              <dd>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-sans text-sm normal-case text-ink hover:text-gold"
                >
                  Visit site <ExternalLink size={14} />
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      <motion.div
        className="mx-auto max-w-editorial px-6 py-16 md:py-24"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        {project.longDescription.split('\n\n').map((para, index) => (
          <p
            key={`${project.slug}-para-${index}`}
            className="mb-6 text-lg leading-relaxed text-muted last:mb-0"
          >
            {para}
          </p>
        ))}
      </motion.div>

      {project.images.length > 0 && (
        <div className="space-y-4 pb-16">
          {project.images.map((src, index) => (
            <img
              key={`${project.slug}-img-${index}`}
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              className="mx-auto w-full max-w-7xl"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <nav className="mx-auto flex max-w-7xl justify-between gap-8 border-t border-border px-6 py-12 md:px-10">
        {prev ? (
          <Link to={`/work/${prev.slug}`} className="group min-w-0 text-left">
            <span className="font-mono text-xs text-muted">Previous</span>
            <p className="font-display text-xl transition-colors group-hover:text-gold">
              ← {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link to={`/work/${next.slug}`} className="group min-w-0 text-right">
            <span className="font-mono text-xs text-muted">Next</span>
            <p className="font-display text-xl transition-colors group-hover:text-gold">
              {next.title} →
            </p>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </article>
  )
}
