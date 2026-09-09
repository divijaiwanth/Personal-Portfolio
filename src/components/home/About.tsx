import { site } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>About</Eyebrow>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="mt-5 max-w-4xl font-display text-[clamp(34px,4.6vw,66px)] font-medium leading-[1.02] tracking-[-0.035em]">
          Systems that survive
          <br />
          contact with production.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-5 max-w-[520px] text-[clamp(15px,1.1vw,17.5px)] leading-[1.62] text-soft">
          {site.bio.detail}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 lg:gap-6">
        {site.aboutStats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 90}
            className="rounded-[20px] border border-hair bg-fill p-6 backdrop-blur-[8px] md:p-8"
          >
            <span className="mb-12 block font-mono text-[11px] tracking-[0.16em] text-dim md:mb-20">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mb-3 font-display text-[22px] font-medium tracking-[-0.02em]">
              {stat.label}
            </h3>
            <p className="text-[clamp(14px,1vw,16px)] leading-[1.6] text-soft">{stat.value}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
