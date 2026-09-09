import { site } from '../../data/site'
import { Reveal } from '../ui/Reveal'

export function Statement() {
  return (
    <section className="relative z-10 bg-base px-6 md:px-10 lg:px-16 2xl:px-24">
      <div className="border-y border-hair py-20 md:py-28 lg:py-32">
        <Reveal className="mx-auto max-w-[1020px] text-center">
          <p className="font-mono text-[11px] uppercase tracking-caps text-dim">Currently</p>
          <p className="mt-7 font-display text-[clamp(26px,3.6vw,52px)] font-medium leading-[1.16] tracking-[-0.032em]">
            {site.aboutExtended.learning}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
