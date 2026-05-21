/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
        gold: 'var(--color-gold)',
        border: 'var(--color-border)',
        'dark-bg': 'var(--color-dark-bg)',
        'dark-text': 'var(--color-dark-text)',
        'brand-red': 'var(--color-brand-red)',
      },
      maxWidth: {
        editorial: '680px',
      },
      letterSpacing: {
        caps: '0.2em',
      },
    },
  },
  plugins: [],
}
