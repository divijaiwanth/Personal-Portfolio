import { useState } from 'react'
import { projects } from '../../data/projects'
import { Eyebrow } from '../ui/Eyebrow'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { ProjectCard } from '../work/ProjectCard'

const INITIAL_COUNT = 6

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featured = projects.filter((p) => p.featured)
  const displayed = showAll ? featured : featured.slice(0, INITIAL_COUNT)

  return (
    <Section id="work">
      <Reveal>
        <Eyebrow>Selected work</Eyebrow>
      </Reveal>

      <Reveal delay={60}>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(34px,4.6vw,66px)] font-medium leading-[1.02] tracking-[-0.035em]">
          Things I built,
          <br />
          and what they taught me.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {displayed.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 90} className="h-full">
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>

      {featured.length > INITIAL_COUNT && (
        <Reveal className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="rounded-full border border-hair bg-fill px-7 py-3 text-[13.5px] text-soft backdrop-blur-[14px] transition-colors duration-500 hover:border-cream/30 hover:text-cream"
          >
            {showAll ? 'Show less' : `Show all ${featured.length} projects`}
          </button>
        </Reveal>
      )}
    </Section>
  )
}
