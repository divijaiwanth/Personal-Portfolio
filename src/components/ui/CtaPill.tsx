import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface CtaPillProps {
  children: ReactNode
  to?: string
  href?: string
  external?: boolean
  className?: string
}

const pillClasses =
  'group inline-flex items-center gap-3.5 rounded-full border border-hair bg-fill py-2 pl-6 pr-2 text-sm font-medium text-cream backdrop-blur-[14px] transition-[transform,background-color,border-color] duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 hover:border-cream/30 hover:bg-cream/10 motion-reduce:transform-none motion-reduce:transition-none'

function PillBody({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <span
        className="grid h-[34px] w-[34px] place-items-center rounded-full border border-hair bg-cream/[0.08] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:rotate-45 motion-reduce:transform-none motion-reduce:transition-none"
        aria-hidden
      >
        <svg
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5"
        >
          <path d="M3 11 11 3" />
          <path d="M5 3h6v6" />
        </svg>
      </span>
    </>
  )
}

export function CtaPill({ children, to, href, external, className = '' }: CtaPillProps) {
  const classes = `${pillClasses} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        <PillBody>{children}</PillBody>
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <PillBody>{children}</PillBody>
    </a>
  )
}
