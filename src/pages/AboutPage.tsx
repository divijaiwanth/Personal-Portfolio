import { Download } from 'lucide-react'
import { site } from '../data/site'
import { CtaPill } from '../components/ui/CtaPill'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Reveal } from '../components/ui/Reveal'

export function AboutPage() {
  return (
    <div className="relative z-10 min-h-screen bg-base px-6 pb-24 pt-36 md:px-10 md:pt-44 lg:px-16">
      <div className="mx-auto max-w-shell">
        <Eyebrow className="rise" style={{ animationDelay: '0ms' }}>
          About
        </Eyebrow>

        <h1
          className="rise mt-6 max-w-4xl font-display text-[clamp(40px,6vw,86px)] font-medium leading-[0.94] tracking-[-0.04em]"
          style={{ animationDelay: '160ms' }}
        >
          {site.role}.
        </h1>

        <div className="mt-14 grid gap-14 border-t border-hair pt-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-2xl text-[19px] leading-[1.55] text-cream md:text-[22px]">
                {site.bio.lead}
              </p>
              <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-soft">
                {site.bio.detail}
              </p>
            </Reveal>

            <Reveal className="mt-16">
              <Eyebrow>Education</Eyebrow>
              <ul className="mt-6">
                {site.education.map((edu) => (
                  <li key={edu.school} className="border-b border-hair py-6 first:pt-0">
                    <p className="font-display text-xl font-medium tracking-[-0.02em]">
                      {edu.school}
                    </p>
                    <p className="mt-1.5 text-[14.5px] text-soft">{edu.degree}</p>
                    {edu.detail && (
                      <p className="mt-1.5 font-mono text-[11px] tracking-[0.1em] text-dim">
                        {edu.detail}
                      </p>
                    )}
                    <p className="mt-1.5 font-mono text-[11px] tracking-[0.1em] text-dim">
                      {edu.location} · {edu.dates}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-16">
              <Eyebrow>Certifications</Eyebrow>
              <ul className="mt-6">
                {site.certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex flex-wrap items-baseline justify-between gap-3 border-b border-hair py-4"
                  >
                    <span className="text-[14.5px] text-cream">{cert.name}</span>
                    <span className="font-mono text-[11px] tracking-[0.1em] text-dim">
                      {cert.issuer}, {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal className="rounded-[20px] border border-hair bg-fill p-7 backdrop-blur-[8px]">
              <Eyebrow>Currently exploring</Eyebrow>
              <p className="mt-5 text-[clamp(14.5px,1.05vw,17px)] leading-[1.62] text-soft">
                {site.aboutExtended.learning}
              </p>
            </Reveal>

            <Reveal className="mt-6 rounded-[20px] border border-hair bg-fill p-7 backdrop-blur-[8px]">
              <Eyebrow>Interests</Eyebrow>
              <ul className="mt-5 flex flex-col gap-3">
                {site.aboutExtended.interests.map((item) => (
                  <li key={item} className="text-[15px] leading-[1.5] text-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-6 rounded-[20px] border border-hair bg-fill p-7 backdrop-blur-[8px]">
              <Eyebrow>Based in</Eyebrow>
              <p className="mt-5 font-display text-xl font-medium tracking-[-0.02em]">
                {site.location}
              </p>
              <p className="mt-1.5 text-[14.5px] text-soft">{site.email}</p>
            </Reveal>

            <Reveal className="mt-10 flex flex-wrap gap-3">
              <a href="/resume.pdf" download className="inline-flex">
                <span className="group inline-flex items-center gap-3 rounded-full border border-hair bg-fill py-3 pl-6 pr-6 text-sm font-medium text-cream backdrop-blur-[14px] transition-[transform,background-color,border-color] duration-[400ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-0.5 hover:border-cream/30 hover:bg-cream/10 motion-reduce:transform-none motion-reduce:transition-none">
                  <Download size={15} aria-hidden />
                  Download résumé
                </span>
              </a>
              <CtaPill href={`mailto:${site.email}`}>Get in touch</CtaPill>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}
