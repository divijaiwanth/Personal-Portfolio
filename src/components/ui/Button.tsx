import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'filled'
}

export function Button({
  variant = 'filled',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-wide transition-colors duration-300 disabled:opacity-50'
  const variants = {
    filled: 'bg-ink text-dark-text hover:bg-accent',
    ghost: 'border border-border bg-transparent text-ink hover:border-ink',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
