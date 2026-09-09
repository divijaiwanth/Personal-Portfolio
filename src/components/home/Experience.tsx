import { site } from '../../data/site'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <Eyebrow>Experience</Eyebrow>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(34px,4.6vw,66px)] font-medium leading-[1.02] tracking-[-0.035em]">
          Where the work shipped.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:mt-16 lg:gap-6">
        {site.experience.map((item) => (
          <Reveal
            key={item.company}
            className="rounded-[20px] border border-hair bg-fill p-6 backdrop-blur-[8px] md:p-9"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h3 className="font-display text-[26px] font-medium tracking-[-0.025em] md:text-3xl">
                {item.company}
              </h3>
              <span className="font-mono text-[11px] tracking-[0.14em] text-dim">
                {item.dates}
              </span>
            </div>
            <p className="mt-2 text-[15px] text-cream/80">{item.role}</p>
            <p className="mt-5 max-w-2xl text-[14.5px] leading-[1.62] text-soft">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
