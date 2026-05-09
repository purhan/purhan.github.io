import { useEffect, useRef } from 'react'
import { FiStar } from 'react-icons/fi'
import { FaReddit } from 'react-icons/fa'

const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";
const gsocLogo = "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon.svg";
const openwispLogo = "https://avatars.githubusercontent.com/u/1019688?s=200&v=4";

const tracks = [
  {
    id: "opensource",
    title: "Open Source & Networking",
    items: [
      {
        id: "openwisp",
        title: "OpenWISP",
        subtitle: "Observability Systems",
        description: "I created observability tools for OpenWISP's router health monitoring system. Optimized system calls, reducing latency by 75%.",
        icon: <img src={openwispLogo} alt="OpenWISP" style={{width: 24, height: 24, borderRadius: '50%'}} />,
        focus: 5,
        date: "2021",
      },
      {
        id: "gsoc",
        title: "Google Summer of Code",
        subtitle: "Netengine Work",
        description: "I built and deployed a Python-based SNMP service to support proprietary firmware devices under GSoC 2021.",
        icon: <img src={gsocLogo} alt="GSoC" style={{width: 24, height: 24}} />,
        focus: 5,
        date: "May 2021 - Aug 2021",
      },
      {
        id: "unixporn",
        title: "r/unixporn Viral Setup",
        subtitle: "Dotfiles Configuration",
        description: "I designed a highly customized, keyboard-driven Linux workflow. My dotfiles went viral, earning hundreds of stars on GitHub.",
        icon: <FaReddit color="#ff4500" style={{fontSize: '1.4rem'}} />,
        focus: 5,
        date: "2021",
      }
    ]
  },
  {
    id: "competitive",
    title: "Competitive & Hacks",
    items: [
      {
        id: "cp",
        title: "Competitive Programming",
        subtitle: "Codeforces & Codechef",
        description: "I competed intensely in algorithms, reaching Expert on Codeforces and 5-stars on Codechef (Top 1%). Also qualified as an ACM ICPC Regionalist.",
        icon: <span style={{fontSize: '1.2rem'}}>🏆</span>,
        focus: 3,
        date: "2021 - 2022",
      },
      {
        id: "hackdefine",
        title: "Hackdefine Winner",
        subtitle: "Filecoin Track",
        description: "I won the Hackdefine Filecoin track by building the Hir3 project, a decentralized application.",
        icon: <span style={{fontSize: '1.2rem'}}>🥇</span>,
        focus: 4,
        date: "2022",
      }
    ]
  },
  {
    id: "google",
    title: "Google & AI Engineering",
    items: [
      {
        id: "google-intern",
        title: "Google Intern",
        subtitle: "Knowledge Graph Team",
        description: "I built OLAP-based analytics tools to evaluate Knowledge Graph schema changes, saving 170+ engineering hours per quarter.",
        icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
        focus: 5,
        date: "Jan 2023 - Jul 2023",
      },
      {
        id: "google-fte-search",
        title: "Google FTE",
        subtitle: "Search Platforms",
        description: "I architected telemetry frameworks and led DMA compliance for Spanner, reducing incident detection latency by 70%.",
        icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
        focus: 5,
        date: "Aug 2023 - Aug 2024",
      },
      {
        id: "google-fte-workspace",
        title: "Google Workspace",
        subtitle: "Workspace Team",
        description: "Currently I'm building high-scale distributed systems and developer tooling for Google Workspace.",
        icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
        focus: 5,
        date: "Aug 2024 - Present",
      },
      {
        id: "stocksage",
        title: "StockSage AI",
        subtitle: "AI Agents Challenge",
        description: "I architected an AI-powered stock intelligence platform leveraging LLMs and RAG, featuring dynamic portfolio exit strategies.",
        icon: <span style={{fontSize: '1.2rem'}}>🤖</span>,
        focus: 5,
        date: "2026",
      }
    ]
  }
];

export default function CareerHighlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.track-node').forEach(el => el.classList.add('visible'))
        }
      }),
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="career-highlights" ref={ref} style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <p className="section-label">Journey</p>
        <h2 className="section-title">Career Visualization</h2>
        <p className="section-subtitle">Parallel tracks mapping my journey through Open Source, Competitions, and Engineering at Google.</p>
        
        <div className="parallel-tracks">
          {tracks.map((track, trackIndex) => (
            <div className="career-track" key={track.id}>
              <h3 className="career-track-title">{track.title}</h3>
              <div className="career-track-items">
                {track.items.map((item, itemIndex) => (
                  <div className="track-node" key={item.id} style={{ transitionDelay: `${(trackIndex * 0.1) + (itemIndex * 0.1)}s` }}>
                    <div className="track-node-header">
                      <div className="track-node-icon">{item.icon}</div>
                      <span className="track-node-date">{item.date}</span>
                    </div>
                    <h4 className="track-node-title">{item.title}</h4>
                    <h5 className="track-node-subtitle">{item.subtitle}</h5>
                    <p className="track-node-desc">{item.description}</p>
                    <div className="track-node-focus">
                      <span className="focus-label">Focus:</span>
                      <div className="focus-stars">
                        {[1, 2, 3, 4, 5].map(star => (
                          <FiStar key={star} className={star <= item.focus ? 'star-filled' : 'star-empty'} />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
