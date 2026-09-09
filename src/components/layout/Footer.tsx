import { site } from '../../data/site'
import { Wordmark } from '../ui/Wordmark'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 bg-base px-6 md:px-10 lg:px-16 2xl:px-24">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-6 border-t border-hair py-7 pb-10">
        <Wordmark variant="footer" className="text-cream" />

        <span className="text-[13px] text-dim">
          © {year} {site.name}. All rights reserved.
        </span>

        <ul className="flex gap-6">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-dim transition-colors duration-300 hover:text-cream"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-dim transition-colors duration-300 hover:text-cream"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] text-dim transition-colors duration-300 hover:text-cream"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
