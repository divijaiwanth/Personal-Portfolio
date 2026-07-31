import { BrandDot } from './Logo'

interface SectionLabelProps {
  children: string
  dark?: boolean
}

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-xs font-medium uppercase tracking-caps ${
        dark ? 'text-dark-text/60' : 'text-muted'
      }`}
    >
      {children}
      <BrandDot />
    </p>
  )
}
