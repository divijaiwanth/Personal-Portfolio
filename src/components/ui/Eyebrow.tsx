import type { CSSProperties } from 'react'

interface EyebrowProps {
  children: string
  className?: string
  style?: CSSProperties
}

export function Eyebrow({ children, className = '', style }: EyebrowProps) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-caps text-dim ${className}`}
      style={style}
    >
      {children}
    </p>
  )
}
