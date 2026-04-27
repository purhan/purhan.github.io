import { useState, useEffect } from 'react'
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi'
import type { Theme } from '../hooks/useTheme'

interface NavbarProps {
  theme: Theme
  onToggle: () => void
}

const links = [
  { href: '#about',        label: 'About' },
  { href: '#experience',   label: 'Experience' },
  { href: '#projects',     label: 'Projects' },
  { href: '#skills',       label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar({ theme, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container navbar__inner">
          <span className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            purhan.
          </span>
          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
          <div className="navbar__right">
            <button
              id="theme-toggle"
              className="theme-toggle"
              onClick={onToggle}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <HiSun /> : <HiMoon />}
            </button>
            <button
              className="navbar__menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menu"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`navbar__mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
