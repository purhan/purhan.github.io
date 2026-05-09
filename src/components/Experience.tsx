import { useEffect, useRef } from 'react'

const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";
const gsocLogo = "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon.svg";

const jobs = [
  {
    company: 'Google',
    url: 'https://google.com',
    role: 'Software Engineer — Engineering Productivity & Compliance',
    period: 'Aug 2023 – Present',
    logo: <img src={googleLogo} alt="Google" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />,
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
    logo: <img src={googleLogo} alt="Google" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />,
    bullets: [
      'Built OLAP-based analytics tools to evaluate Knowledge Graph schema changes, preventing high-risk modifications and improving schema reliability.',
      'Automated analysis pipelines, saving 170+ engineering hours per quarter and improving decision turnaround time by 35%.',
    ],
  },
  {
    company: 'Google Summer of Code',
    url: 'https://summerofcode.withgoogle.com',
    role: 'Student Developer — Netengine',
    period: 'May 2021 – Aug 2021',
    logo: <img src={gsocLogo} alt="GSoC" style={{ width: '24px', height: '24px', borderRadius: '4px' }} />,
    bullets: [
      'Designed and deployed a Python-based SNMP service to support proprietary firmware devices under the GSoC program.',
      'Focused on the Netengine module to expand monitoring coverage for network operators.',
    ],
  },
  {
    company: 'OpenWISP',
    url: 'https://openwisp.org',
    role: 'Student Developer Intern',
    period: 'May 2021 – Aug 2021',
    logo: (
      <div className="theme-logo-wrapper" style={{ width: '24px', height: '24px' }}>
        <img src="/openwisp-logo-black.svg" alt="OpenWISP" className="logo-light-mode" style={{ width: '100%', height: '100%' }} />
        <img src="/openwisp-logo.svg" alt="OpenWISP" className="logo-dark-mode" style={{ width: '100%', height: '100%' }} />
      </div>
    ),
    bullets: [
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
                <div className="timeline-item__company" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {job.logo && job.logo}
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
