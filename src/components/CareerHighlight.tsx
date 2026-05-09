import { useEffect, useRef } from 'react'
import { FiGithub, FiCode, FiAward, FiBriefcase, FiCpu, FiStar } from 'react-icons/fi'

const milestones = [
  {
    id: 1,
    title: "Open Source & Dotfiles",
    subtitle: "OpenWISP GSoC '21 & r/unixporn",
    description: "Optimized system calls reducing latency by 75%. Dotfiles went viral earning hundreds of GitHub stars.",
    icon: <FiGithub />,
    focus: 5,
    date: "2021",
  },
  {
    id: 2,
    title: "Competitive Programming",
    subtitle: "Codeforces & Codechef",
    description: "Expert on Codeforces, 5-star on Codechef (Top 1%), and ACM ICPC Regionalist.",
    icon: <FiCode />,
    focus: 3,
    date: "2021 - 2022",
  },
  {
    id: 3,
    title: "Hackathons",
    subtitle: "Hackdefine Filecoin Track",
    description: "Won the Hackdefine Filecoin track building the Hir3 project.",
    icon: <FiAward />,
    focus: 4,
    date: "2022",
  },
  {
    id: 4,
    title: "Google Intern",
    subtitle: "Knowledge Graph Team",
    description: "Built OLAP-based analytics tools to evaluate KG schema changes.",
    icon: <FiBriefcase />,
    focus: 5,
    date: "Jan 2023 - Jul 2023",
  },
  {
    id: 5,
    title: "Google FTE",
    subtitle: "Search Platforms",
    description: "Architected telemetry frameworks, led DMA compliance for Spanner.",
    icon: <FiBriefcase />,
    focus: 5,
    date: "Aug 2023 - Aug 2024",
  },
  {
    id: 6,
    title: "Google FTE",
    subtitle: "Google Workspace",
    description: "Working on high-scale distributed systems and developer tooling.",
    icon: <FiBriefcase />,
    focus: 5,
    date: "Aug 2024 - Present",
  },
  {
    id: 7,
    title: "AI Agents Challenge",
    subtitle: "StockSage Project",
    description: "Architected an AI-powered stock intelligence platform leveraging LLMs and RAG.",
    icon: <FiCpu />,
    focus: 5,
    date: "2026",
  }
];

export default function CareerHighlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.tree-node').forEach(el => el.classList.add('visible'))
          e.target.querySelectorAll('.tree-connector').forEach(el => el.classList.add('visible'))
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="career-highlights" ref={ref} style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <p className="section-label">Journey</p>
        <h2 className="section-title">Career Highlights</h2>
        <p className="section-subtitle">A flowchart of my path so far.</p>
        
        <div className="tree-container">
          {milestones.map((item, index) => (
            <div className="tree-item" key={item.id}>
              <div className="tree-node" style={{ transitionDelay: `${index * 0.15}s` }}>
                <div className="tree-node-header">
                  <div className="tree-node-icon">{item.icon}</div>
                  <span className="tree-node-date">{item.date}</span>
                </div>
                <h3 className="tree-node-title">{item.title}</h3>
                <h4 className="tree-node-subtitle">{item.subtitle}</h4>
                <p className="tree-node-desc">{item.description}</p>
                <div className="tree-node-focus">
                  <span className="focus-label">Focus Level:</span>
                  <div className="focus-stars">
                    {[1, 2, 3, 4, 5].map(star => (
                      <FiStar key={star} className={star <= item.focus ? 'star-filled' : 'star-empty'} />
                    ))}
                  </div>
                </div>
              </div>
              {index < milestones.length - 1 && (
                <div className="tree-connector" style={{ transitionDelay: `${index * 0.15 + 0.1}s` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
