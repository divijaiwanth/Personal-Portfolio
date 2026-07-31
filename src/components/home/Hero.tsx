import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { site } from '../../data/site'
import { easeApple } from '../../lib/motion'
import { gsap, ScrollTrigger } from '../../lib/gsap'

const HERO_VIDEO_SRC = '/videos/hero-bg.mp4'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    if (!section || !content) return

    const trigger = gsap.to(content, {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      trigger.scrollTrigger?.kill()
      trigger.kill()
    }
  }, [])

  useEffect(() => () => ScrollTrigger.refresh(), [])

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-dark-bg text-dark-text"
    >
      {!videoFailed && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-dark-bg/70" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" aria-hidden />

      <div ref={contentRef} className="relative z-20 px-10 py-28 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            className="max-w-2xl font-display font-semibold text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeApple }}
          >
            {site.name}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl font-sans text-lg text-dark-text/70 md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: easeApple }}
          >
            <em>{site.tagline}</em>
          </motion.p>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 z-20 md:left-16 lg:left-24">
        <motion.div
          className="h-16 w-px bg-dark-text/40"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: easeApple }}
          style={{ originY: 0 }}
          aria-hidden
        />
        <div className="mt-2 flex items-center gap-3">
          <motion.div
            className="h-2 w-2 shrink-0 rounded-full bg-brand-red"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <motion.p
            className="font-mono text-xs uppercase tracking-wider text-dark-text/60"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: easeApple }}
          >
            Scroll down for awesomeness
          </motion.p>
        </div>
      </div>
    </section>
  )
}
