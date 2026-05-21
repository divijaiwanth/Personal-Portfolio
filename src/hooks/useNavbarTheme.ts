import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_PROBE = 72

export function useNavbarTheme() {
  const location = useLocation()
  const [overDark, setOverDark] = useState(true)

  useEffect(() => {
    const update = () => {
      const sections = document.querySelectorAll<HTMLElement>('[data-nav-theme]')

      if (sections.length === 0) {
        setOverDark(location.pathname === '/')
        return
      }

      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect()
        if (top <= NAV_PROBE && bottom > NAV_PROBE) {
          setOverDark(section.dataset.navTheme === 'dark')
          return
        }
      }

      const first = sections[0].getBoundingClientRect()
      if (first.top > NAV_PROBE) {
        setOverDark(sections[0].dataset.navTheme === 'dark')
        return
      }

      const last = sections[sections.length - 1]
      setOverDark(last.dataset.navTheme === 'dark')
    }

    update()
    const t = window.setTimeout(update, 50)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.clearTimeout(t)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [location.pathname, location.hash])

  return { overDark }
}
