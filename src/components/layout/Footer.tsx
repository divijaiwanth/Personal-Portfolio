import { Link } from 'react-router-dom'
import { Logo } from '../ui/Logo'
import { site } from '../../data/site'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Logo variant="footer" className="text-ink" />
        <ul className="flex gap-8">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              aria-label="GitHub"
            >
              <GitHubIcon size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </li>
        </ul>
        <p className="font-mono text-xs text-muted">
          © {year} · <Link to="/" className="hover:text-ink">Home</Link>
        </p>
      </div>
    </footer>
  )
}
