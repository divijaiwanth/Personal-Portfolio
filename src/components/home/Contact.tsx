import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../ui/SocialIcons'
import { site } from '../../data/site'
import { BrandDot } from '../ui/Logo'
import { fadeUp, staggerContainer } from '../../lib/motion'

const channels = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    Icon: Phone,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: site.name,
    href: site.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: site.name,
    href: site.github,
    Icon: GitHubIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      data-nav-theme="dark"
      className="flex min-h-[100svh] items-center bg-accent px-6 py-16 text-dark-text md:px-10 md:py-20"
    >
      <motion.div
        className="mx-auto w-full max-w-3xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="font-display text-3xl leading-tight md:text-5xl"
          variants={fadeUp}
        >
          <em>
            Let&apos;s build something together
            <BrandDot />
          </em>
        </motion.h2>

        <motion.p
          className="mt-6 max-w-xl text-base text-dark-text/70 md:text-lg"
          variants={fadeUp}
        >
          The fastest way to reach me is email, phone, LinkedIn, or GitHub — I&apos;ll get back
          to you as soon as I can.
        </motion.p>

        <motion.ul className="mt-10 space-y-0 border-t border-dark-text/20" variants={fadeUp}>
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label} className="border-b border-dark-text/20">
              <a
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group flex items-center gap-5 py-6 transition-colors hover:text-brand-red"
              >
                <Icon size={20} className="shrink-0 text-dark-text/50 group-hover:text-brand-red" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase tracking-wider text-dark-text/50">
                    {label}
                  </span>
                  <span className="mt-1 block font-display text-xl md:text-2xl">{value}</span>
                </span>
                <span className="font-sans text-sm opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
