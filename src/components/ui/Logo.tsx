import type { ElementType } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const variantStyles = {
  nav: 'font-display font-semibold text-xl tracking-tight',
  hero: 'font-display font-semibold text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-tight',
  footer: 'font-display font-semibold text-lg tracking-tight',
  lg: 'font-display font-semibold text-2xl md:text-3xl tracking-tight',
  sm: 'font-display font-semibold text-base tracking-tight',
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
