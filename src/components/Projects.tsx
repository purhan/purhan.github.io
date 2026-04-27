import { useEffect, useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    emoji: '📈',
    name: 'StockSage',
    desc: 'Autonomous Indian market intelligence dashboard with AI-curated stock recommendations and real-time exit signals. Built with LangChain, Gemini, and pgvector for long-term memory reasoning.',
    tags: ['React 18', 'TypeScript', 'Supabase', 'LangChain', 'Gemini', 'pgvector'],
    github: null,
    live: 'https://stocksage.site',
    preview: '/previews/stocksage.png',
    featured: true,
  },
  {
    emoji: '⚡',
    name: 'NetEngine',
    desc: 'High-performance, low-latency networking engine for distributed systems. Focuses on maximizing throughput and minimizing jitter for core infrastructure services.',
    tags: ['C++', 'Networking', 'Distributed Systems'],
    github: 'https://github.com/purhan/netengine',
    live: null,
    preview: '/previews/netengine.png',
    featured: false,
  },
  {
    emoji: '📊',
    name: 'Serstat',
    desc: 'Real-time distributed monitoring dashboard tracking server health across clusters. Features WebSocket-based live updates and Redis-backed caching for 60% latency reduction.',
    tags: ['Node.js', 'React', 'Socket.IO', 'Redis', 'MongoDB'],
    github: 'https://github.com/purhan/serstat',
    live: null,
    preview: '/previews/serstat.png',
    featured: false,
  },
  {
    emoji: '🍃',
    name: 'Underleaf',
    desc: 'Cloud-native application ecosystem built on TypeScript and Supabase Edge Functions for a seamless serverless collaborative workflow experience.',
    tags: ['TypeScript', 'Supabase', 'Edge Functions', 'Serverless'],
    github: 'https://github.com/purhan/underleaf',
    live: null,
    preview: '/previews/underleaf.png',
    featured: false,
  },
  {
    emoji: '⚙️',
    name: 'Dotfiles',
    desc: 'Highly customized AwesomeWM configuration in Lua, built for an ergonomic keyboard-driven Linux workflow. Includes window management, keybindings, and custom widgets.',
    tags: ['Lua', 'AwesomeWM', 'Linux', 'Shell'],
    github: 'https://github.com/purhan/dotfiles',
    live: null,
    preview: '/previews/dotfiles.gif',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of things I've built — from AI-powered platforms to systems infrastructure.</p>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div
              className="project-card fade-up"
              key={p.name}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Preview image */}
              <div className="project-card__preview">
                <img src={p.preview} alt={`${p.name} preview`} />
                {p.featured && <span className="featured-badge">✦ Featured</span>}
              </div>

              <div className="project-card__body">
                <div className="project-card__top">
                  <span className="project-card__emoji">{p.emoji}</span>
                  <div className="project-card__links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link" aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link" aria-label="Live site">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-card__name">{p.name}</div>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
