import { useEffect, useRef } from 'react'

const groups = [
  {
    title: 'Languages & Systems',
    icon: '💻',
    items: ['C++', 'Python', 'Go', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'Lua'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    items: ['GCP', 'Spanner', 'Apache Kafka', 'Protocol Buffers', 'Redis', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Tools',
    icon: '🛠️',
    items: ['React', 'Node.js', 'Express', 'MongoDB', 'LangChain', 'Supabase', 'Angular'],
  },
  {
    title: 'Domains',
    icon: '🧠',
    items: ['Distributed Systems', 'Static Analysis', 'OLAP', 'RAG', 'Data Compliance', 'High-Scale System Design'],
  },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="skills" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Toolkit</p>
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">Technologies I use to build, scale, and maintain production systems.</p>
        <div className="skills__grid">
          {groups.map((g, i) => (
            <div className="skills-group fade-up" key={g.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="skills-group__title">
                <span>{g.icon}</span> {g.title}
              </div>
              <div className="skills-group__items">
                {g.items.map(item => (
                  <span className="skill-badge" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
