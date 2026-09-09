import { site } from '../../data/site'
import { CtaPill } from '../ui/CtaPill'
import { Wordmark } from '../ui/Wordmark'

export function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col justify-between px-6 pb-[clamp(32px,7vh,88px)] pt-36 md:px-10 md:pt-44 lg:px-16 lg:pt-48 2xl:px-24">
      <div className="mx-auto w-full max-w-shell">
        <Wordmark
          as="h1"
          variant="hero"
          stacked
          className="rise m-0 opacity-90"
          style={{ animationDelay: '400ms' }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-shell justify-end">
        <div className="flex max-w-[min(560px,100%)] flex-col items-end text-right">
          <p
            className="rise m-0 text-[clamp(15px,1.25vw,20px)] leading-[1.6] text-soft opacity-90"
            style={{ animationDelay: '560ms' }}
          >
            {site.bio.lead}
          </p>

          <div className="rise mt-7" style={{ animationDelay: '700ms' }}>
            <CtaPill to="/#work">See the work</CtaPill>
          </div>
        </div>
      </div>
    </section>
  )
}
