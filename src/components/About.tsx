import { useEffect, useRef } from 'react'

const stats = [
  { icon: '🏢', value: 'Google', label: 'Current Employer' },
  { icon: '🎓', value: 'CS Graduate', label: 'Computer Science · 8.9 CGPA' },
  { icon: '⚡', value: '3+ yrs', label: 'Professional Experience' },
  { icon: '🌐', value: 'Remote', label: 'Open to Remote Roles' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'))
      }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">A Bit About Me</h2>
        <div className="about__grid">
          <div className="about__text fade-up">
            <p>
              I'm a <strong>Software Engineer at Google</strong>, specializing in high-scale
              distributed systems, data compliance, and developer productivity. My work bridges
              the gap between performance-critical backend infrastructure and seamless developer
              experiences.
            </p>
            <p>
              At Google, I've architected telemetry frameworks that reduced incident detection
              latency by <strong>70%</strong>, led DMA compliance initiatives for multi-billion dollar
              EU workloads on Spanner, and built automation systems saving <strong>200+ engineering
              hours per quarter</strong>.
            </p>
            <p>
              When I'm not building at scale, I'm usually refining my keyboard-driven Linux
              workflow (AwesomeWM), competing in algorithmic contests, or contributing to
              open-source networking tools.
            </p>
          </div>
          <div className="about__stats">
            {stats.map((s, i) => (
              <div className={`stat-card fade-up`} key={s.label} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-card__icon">{s.icon}</div>
                <div className="stat-card__value">{s.value}</div>
                <div className="stat-card__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
