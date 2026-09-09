import { site } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Skills() {
  return (
    <Section id="toolkit">
      <Reveal>
        <Eyebrow>Toolkit</Eyebrow>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(34px,4.6vw,66px)] font-medium leading-[1.02] tracking-[-0.035em]">
          What I build with.
        </h2>
      </Reveal>

      <div className="mt-12 border-t border-hair md:mt-16">
        {site.skills.map((row, i) => (
          <Reveal
            key={row.category}
            delay={i * 70}
            className="grid gap-3 border-b border-hair py-7 md:grid-cols-12 md:gap-8 md:py-9"
          >
            <p className="font-display text-lg font-medium tracking-[-0.02em] md:col-span-4">
              {row.category}
            </p>
            <p className="text-[clamp(14.5px,1.05vw,17px)] leading-[1.62] text-soft md:col-span-8">{row.items}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
