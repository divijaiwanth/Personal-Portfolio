import { useEffect, useRef } from 'react'

const HERO_VIDEO_SRC = '/videos/hero-bg.mp4'
const HERO_POSTER_SRC = '/videos/hero-poster.jpg'

export function CinematicBackdrop() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const start = () => {
      const attempt = video.play()
      if (attempt) attempt.catch(() => {})
    }

    video.addEventListener('canplay', start)
    window.addEventListener('load', start)
    start()

    return () => {
      video.removeEventListener('canplay', start)
      window.removeEventListener('load', start)
    }
  }, [])

  // The film only belongs to the hero. Once it is scrolled past, opaque sections
  // cover it anyway, so stop decoding frames nobody can see.
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let frame = 0
    const sync = () => {
      frame = 0
      const pastHero = window.scrollY > window.innerHeight
      if (pastHero && !video.paused) video.pause()
      if (!pastHero && video.paused) video.play().catch(() => {})
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(sync)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <video
        ref={videoRef}
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO_SRC}
        poster={HERO_POSTER_SRC}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="cinema-scrim pointer-events-none fixed inset-0 z-[1]" aria-hidden />
      <div className="cinema-vignette pointer-events-none fixed inset-0 z-[2]" aria-hidden />
    </>
  )
}
