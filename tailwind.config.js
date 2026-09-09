/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        base: 'var(--color-base)',
        cream: 'var(--color-cream)',
        soft: 'var(--color-soft)',
        dim: 'var(--color-dim)',
        hair: 'var(--color-hair)',
        fill: 'var(--color-fill)',
      },
      maxWidth: {
        editorial: '680px',
        shell: 'min(1400px, 100%)',
      },
      letterSpacing: {
        caps: '0.18em',
      },
    },
  },
  plugins: [],
}
