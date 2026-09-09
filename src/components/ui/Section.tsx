import type { ReactNode } from 'react'

const PAD = 'px-6 md:px-10 lg:px-16 2xl:px-24'

interface SectionProps {
  children: ReactNode
  id?: string
  className?: string
}

/**
 * Opaque section: the hero film is position:fixed, so everything below the hero
 * must paint a solid base colour over it.
 */
export function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative z-10 bg-base py-[clamp(72px,11vh,150px)] ${PAD} ${className}`}
    >
      <div className="mx-auto max-w-shell">{children}</div>
    </section>
  )
}
