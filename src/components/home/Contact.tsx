import { site } from '../../data/site'
import { CtaPill } from '../ui/CtaPill'
import { Reveal } from '../ui/Reveal'

const channels = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, external: false },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    external: false,
  },
  { label: 'LinkedIn', value: 'in/divi-jaiwanth', href: site.linkedin, external: true },
  { label: 'GitHub', value: 'divijaiwanth', href: site.github, external: true },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 bg-base px-6 pb-14 pt-28 text-center md:px-10 md:pb-20 md:pt-40 lg:px-16"
    >
      <div className="mx-auto max-w-shell">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(34px,4.6vw,66px)] font-medium leading-[1.02] tracking-[-0.035em]">
            Let&apos;s build something.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-[420px] text-[clamp(14.5px,1.05vw,17px)] leading-[1.62] text-soft">
            Open to AI/ML, SDE & Backend engineering roles, internships and collaborations. The fastest way to reach
            me is email.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-9">
          <CtaPill href={`mailto:${site.email}`}>Get in touch</CtaPill>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-16 grid max-w-3xl gap-px border-t border-hair sm:grid-cols-2">
          {channels.map(({ label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-baseline justify-between gap-4 border-b border-hair py-5 text-left transition-colors duration-300 sm:px-1"
            >
              <span className="font-mono text-[10.5px] uppercase tracking-caps text-dim">
                {label}
              </span>
              <span className="text-[14.5px] text-soft transition-colors duration-300 group-hover:text-cream">
                {value}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
