import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { site } from '../data/site'
import { fadeUp, staggerContainer } from '../lib/motion'
import { AnimatedLine } from '../components/ui/AnimatedLine'
import { BrandDot } from '../components/ui/Logo'
import { Button } from '../components/ui/Button'

export function AboutPage() {
  return (
    <div data-nav-theme="light" className="bg-bg px-6 pb-24 pt-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl"
            variants={fadeUp}
          >
            About
            <BrandDot />
          </motion.h1>

          <AnimatedLine className="my-12" />

          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              className="aspect-[3/4] bg-gradient-to-br from-accent/30 to-gold/20 lg:col-span-5"
              variants={fadeUp}
              role="img"
              aria-label="Portrait"
            />
            <motion.div className="lg:col-span-7" variants={fadeUp}>
              <p className="text-xl leading-relaxed text-ink md:text-2xl">{site.bio.lead}</p>
              <p className="mt-6 text-base leading-relaxed text-muted">{site.bio.detail}</p>

              <h2 className="mt-12 font-display text-2xl">Education</h2>
              <ul className="mt-6 space-y-8">
                {site.education.map((edu) => (
                  <li key={edu.school} className="border-b border-border pb-6 last:border-0">
                    <p className="font-display text-xl text-ink">{edu.school}</p>
                    <p className="mt-1 text-muted">{edu.degree}</p>
                    {edu.detail && (
                      <p className="mt-1 font-mono text-xs text-muted">{edu.detail}</p>
                    )}
                    <p className="mt-2 font-mono text-xs text-muted">
                      {edu.location} · {edu.dates}
                    </p>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-2xl">Certifications</h2>
              <ul className="mt-6 space-y-4">
                {site.certifications.map((cert) => (
                  <li key={cert.name} className="flex flex-wrap justify-between gap-2 border-b border-border py-3">
                    <span className="text-ink">{cert.name}</span>
                    <span className="font-mono text-xs text-muted">
                      {cert.issuer}, {cert.year}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-12 font-display text-2xl">Currently exploring</h2>
              <p className="mt-4 text-muted">{site.aboutExtended.learning}</p>

              <h2 className="mt-10 font-display text-2xl">Interests</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {site.aboutExtended.interests.map((item) => (
                  <li
                    key={item}
                    className="border border-border px-4 py-2 font-mono text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <a href="/resume.pdf" download className="mt-12 inline-block">
                <Button variant="filled" className="inline-flex gap-2">
                  <Download size={16} aria-hidden />
                  Download résumé
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
