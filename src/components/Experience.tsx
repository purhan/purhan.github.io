import { useEffect, useRef } from 'react'

const jobs = [
  {
    company: 'Google',
    url: 'https://google.com',
    role: 'Software Engineer — Engineering Productivity & Compliance',
    period: 'Aug 2023 – Present',
    bullets: [
      'Led DMA compliance & regionalization for Spanner-backed services, ensuring PII isolation across regions and reducing regulatory risk for multi-billion dollar EU workloads.',
      'Architected distributed telemetry & logging framework (stream aggregation + real-time monitoring) that improved incident detection latency by 70% and reduced production incidents by 90%.',
      'Designed transaction-level validation and policy enforcement pipelines, improving compliance adherence by 40% and preventing high-risk data violations.',
      'Built scalable onboarding and workflow automation systems, saving 200+ engineering hours/quarter and accelerating product adoption across 10+ internal teams.',
      'Developed static analysis and pre-submit validation systems to catch policy regressions early, improving developer velocity by 25%.',
      'Currently leveraging LLMs to automate complex data governance and compliance workflows.',
    ],
  },
  {
    company: 'Google',
    url: 'https://google.com',
    role: 'Software Engineer Intern — Knowledge Graph',
    period: 'Jan 2023 – Jul 2023',
    bullets: [
      'Built OLAP-based analytics tools to evaluate Knowledge Graph schema changes, preventing high-risk modifications and improving schema reliability.',
      'Automated analysis pipelines, saving 170+ engineering hours per quarter and improving decision turnaround time by 35%.',
    ],
  },
  {
    company: 'OpenWISP — Google Summer of Code',
    url: 'https://openwisp.org',
    role: 'Student Developer Intern',
    period: 'May 2021 – Aug 2021',
    bullets: [
      'Designed and deployed a Python-based SNMP service to support proprietary firmware devices, expanding monitoring coverage for network operators.',
      'Optimized system calls using Retrieval Trees, reducing latency by 75% and improving real-time observability.',
      'Developed a comprehensive testing suite (70+ unit tests, 99% coverage) and automated InfluxDB pipelines for time-series monitoring.',
    ],
  },
]

export default function Experience() {
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
    <section className="section" id="experience" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-label">Career</p>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">Building at scale across distributed infrastructure and developer tooling.</p>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div className="timeline-item fade-up" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="timeline-item__header">
                <div className="timeline-item__company">
                  <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                </div>
                <span className="timeline-item__period">{job.period}</span>
              </div>
              <div className="timeline-item__role">{job.role}</div>
              <ul className="timeline-item__bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
