import type { CSSProperties, ElementType } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const variantStyles = {
  hero: 'font-medium text-[clamp(52px,10vw,200px)] leading-[0.86] tracking-[-0.045em]',
  nav: 'font-semibold text-[19px] leading-none tracking-[-0.03em]',
  footer: 'font-semibold text-[17px] leading-none tracking-[-0.03em]',
  page: 'font-medium text-[clamp(38px,5.6vw,84px)] leading-[0.9] tracking-[-0.04em]',
} as const

export type WordmarkVariant = keyof typeof variantStyles

interface WordmarkProps {
  variant?: WordmarkVariant
  label?: string
  className?: string
  as?: ElementType
  asLink?: boolean
  style?: CSSProperties
  /** Break the name onto one line per word. */
  stacked?: boolean
}

export function Wordmark({
  variant = 'nav',
  label,
  className = '',
  as: Component = 'span',
  asLink = false,
  style,
  stacked = false,
}: WordmarkProps) {
  const text = label ?? (variant === 'hero' ? site.name : site.brand)
  const classes = `font-display ${variantStyles[variant]} ${className}`.trim()

  const words = stacked ? text.split(' ') : [text]
  const mark = (
    <>
      {words.map((word, i) => (
        <span key={word} className={stacked ? 'block' : undefined}>
          {word}
          {i === words.length - 1 && (
            <sup className="ml-[0.04em] align-super text-[0.26em] tracking-normal">*</sup>
          )}
        </span>
      ))}
    </>
  )

  if (asLink) {
    return (
      <Link to="/" className={`${classes} transition-opacity duration-300 hover:opacity-70`} style={style}>
        {mark}
      </Link>
    )
  }

  return (
    <Component className={classes} style={style}>
      {mark}
    </Component>
  )
}
