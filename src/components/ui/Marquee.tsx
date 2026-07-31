import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  className?: string
}

export function Marquee({ children, className = '' }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track flex w-max shrink-0 gap-12">
        <div className="flex shrink-0 gap-12">{children}</div>
        <div className="flex shrink-0 gap-12" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  )
}
