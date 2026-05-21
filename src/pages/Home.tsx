import { About } from '../components/home/About'
import { Contact } from '../components/home/Contact'
import { Experience } from '../components/home/Experience'
import { Hero } from '../components/home/Hero'
import { Projects } from '../components/home/Projects'
import { Skills } from '../components/home/Skills'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  )
}
