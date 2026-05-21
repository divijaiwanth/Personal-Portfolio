import type { ElementType } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const variantStyles = {
  nav: 'font-display text-xl tracking-tight',
  hero: 'font-display text-[clamp(3.5rem,9vw,8.5rem)] leading-[0.95] tracking-tight',
  footer: 'font-display text-lg tracking-tight',
  lg: 'font-display text-2xl md:text-3xl tracking-tight',
  sm: 'font-display text-base tracking-tight',
} as const

export type LogoVariant = keyof typeof variantStyles

interface LogoProps {
  variant?: LogoVariant
  className?: string
  as?: ElementType
  asLink?: boolean
}

export function BrandDot({ className = '' }: { className?: string }) {
  return <span className={`text-brand-red ${className}`}>.</span>
}

export function Logo({
  variant = 'nav',
  className = '',
  as: Component = 'span',
  asLink = false,
}: LogoProps) {
  const mark = (
    <>
      {site.brand}
      <BrandDot />
    </>
  )

  const classes = `${variantStyles[variant]} ${className}`.trim()

  if (asLink) {
    return (
      <Link to="/" className={`${classes} transition-opacity hover:opacity-70`}>
        {mark}
      </Link>
    )
  }

  return <Component className={classes}>{mark}</Component>
}
