import type { ButtonHTMLAttributes } from 'react'
import { useMagnetic } from '../../hooks/useMagnetic'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'filled'
}

export function Button({
  variant = 'filled',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const magneticRef = useMagnetic<HTMLButtonElement>(0.3)
  const base =
    'inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-300 disabled:opacity-50'
  const variants = {
    filled: 'bg-brand-red text-dark-text hover:bg-ink hover:text-brand-red',
    ghost: 'border border-border bg-transparent text-ink hover:border-ink',
  }

  return (
    <button
      ref={magneticRef}
      data-cursor-hover
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
