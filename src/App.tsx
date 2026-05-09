import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CareerHighlight from './components/CareerHighlight'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div data-theme={theme}>
      <Navbar theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <CareerHighlight />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}
