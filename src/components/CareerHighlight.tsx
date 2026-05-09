import { useEffect, useRef, useState } from 'react'
import { FaReddit } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'

const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";
const gsocLogo = "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon.svg";

const stocksage = {
  id: "stocksage",
  title: "StockSage AI",
  subtitle: "AI Agents Challenge",
  description: "I architected an AI-powered stock intelligence platform leveraging LLMs and RAG, featuring dynamic portfolio exit strategies.",
  icon: <span style={{ fontSize: '1.2rem' }}>🤖</span>,
  focus: 2,
  date: "2026",
};

const googleFteWorkspace = {
  id: "google-fte-workspace",
  title: "Google Workspace",
  subtitle: "Workspace Team",
  description: "I'm currently building high-scale distributed systems, and architected telemetry frameworks and led DMA compliance for Spanner.",
  icon: <img src={googleLogo} alt="Google" style={{ width: 20, height: 20 }} />,
  focus: 5,
  date: "Aug 2024 - Present",
};

const googleFteSearch = {
  id: "google-fte-search",
  title: "Google FTE",
  subtitle: "Search Platforms",
  description: "I built foundational developer tooling and infrastructure to reduce incident detection latency.",
  icon: <img src={googleLogo} alt="Google" style={{ width: 20, height: 20 }} />,
  focus: 5,
  date: "Aug 2023 - Aug 2024",
};

const googleIntern = {
  id: "google-intern",
  title: "Google Intern",
  subtitle: "Knowledge Graph Team",
  description: "I built OLAP-based analytics tools to evaluate Knowledge Graph schema changes, saving 170+ engineering hours per quarter.",
  icon: <img src={googleLogo} alt="Google" style={{ width: 20, height: 20 }} />,
  focus: 5,
  date: "Jan 2023 - Jul 2023",
};

const hackdefine = {
  id: "hackdefine",
  title: "Hackdefine Winner",
  subtitle: "Filecoin Track",
  description: "I won the Hackdefine Filecoin track by building the Hir3 project, a decentralized application.",
  icon: <span style={{ fontSize: '1.2rem' }}>🥇</span>,
  focus: 4,
  date: "2022",
};

const openwisp = {
  id: "openwisp",
  title: "OpenWISP",
  subtitle: "Open Source Contributor",
  description: "I created observability tools for OpenWISP's router health monitoring system. Optimized system calls, reducing latency by 75%.",
  icon: (
    <div className="theme-logo-wrapper">
      <img src="/openwisp-logo-black.svg" alt="OpenWISP" className="logo-light-mode" />
      <img src="/openwisp-logo.svg" alt="OpenWISP" className="logo-dark-mode" />
    </div>
  ),
  focus: 5,
  date: "Nov 2020 - Present",
};

const gsoc = {
  id: "gsoc",
  title: "Google Summer of Code",
  subtitle: "Netengine Work",
  description: "I built and deployed a Python-based SNMP service to support proprietary firmware devices under GSoC 2021.",
  icon: <img src={gsocLogo} alt="GSoC" style={{ width: 24, height: 24 }} />,
  focus: 5,
  date: "May 2021 - Aug 2021",
};

const unixporn = {
  id: "unixporn",
  title: "r/unixporn Viral Setup",
  subtitle: "Dotfiles Configuration",
  description: "I designed a customized, keyboard-driven Linux workflow. My dotfiles went viral, earning hundreds of stars.",
  icon: <FaReddit color="#ff4500" style={{ fontSize: '1.4rem' }} />,
  focus: 5,
  date: "2021",
};

const cp = {
  id: "cp",
  title: "Competitive Programming",
  subtitle: "Codeforces & Codechef",
  description: "I competed intensely in algorithms, reaching Expert on Codeforces and 5-stars on Codechef (Top 1%).",
  icon: <span style={{ fontSize: '1.2rem' }}>🏆</span>,
  focus: 3,
  date: "2021 - 2022",
};

const eras = [
  {
    title: "Professional Career",
    rows: [
      { left: stocksage, right: null },
      { left: null, right: googleFteWorkspace },
      { left: googleFteSearch, right: null },
    ]
  },
  {
    title: "Early Career & Open Source",
    rows: [
      { left: null, right: googleIntern },
      { left: hackdefine, right: null },
      { left: gsoc, right: openwisp },
      { left: cp, right: unixporn },
    ]
  }
];

const ProgressBar = ({ focus }: { focus: number }) => {
  const percentage = (focus / 5) * 100;
  return (
    <div className="focus-progress-container">
      <div className="focus-progress-bar" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default function CareerHighlight() {
  const ref = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false);

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

  const renderNode = (item: any, align: 'left' | 'right', delay: number) => {
    if (!item) return <div className={`track-node-empty track-node-empty-${align}`}></div>;
    return (
      <div className={`track-node track-node-${align}`} key={item.id} style={{ transitionDelay: `${delay}s` }}>
        <div className="track-node-arrow"></div>
        <div className="track-node-header">
          <div className="track-node-icon">{item.icon}</div>
          <div className="track-node-header-text">
            <h4 className="track-node-title">{item.title}</h4>
            <span className="track-node-date">{item.date}</span>
          </div>
        </div>
        <div className="track-node-content">
          <h5 className="track-node-subtitle">{item.subtitle}</h5>
          <p className="track-node-desc">{item.description}</p>
          <div className="track-node-focus">
            <span className="focus-label">Focus</span>
            <ProgressBar focus={item.focus} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="section" id="career-highlights" ref={ref} style={{ background: 'var(--bg-primary)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <p className="section-label">Summary</p>
        <h2 className="section-title">Career Highlights</h2>
        <p className="section-subtitle" style={{ marginBottom: '48px' }}>A timeline detailing my path from early open-source days to the industry.</p>

        <div className={`timeline-wrapper ${isExpanded ? 'expanded' : ''}`}>
          <div className="vertical-timeline">
            {eras.map((era, eraIdx) => (
              <div className="timeline-era" key={era.title}>
                <div className="era-badge-container">
                  <h3 className="era-badge">{era.title}</h3>
                </div>

                {era.rows.map((row, rowIdx) => {
                  const delay = 0.1 + ((eraIdx * 4 + rowIdx) * 0.1);
                  return (
                    <div className="timeline-row" key={rowIdx}>
                      <div className="timeline-spine-line"></div>
                      <div className="timeline-spine-dot"></div>
                      <div className="timeline-half timeline-half-left">
                        {renderNode(row.left, 'left', delay)}
                      </div>
                      <div className="timeline-half timeline-half-right">
                        {renderNode(row.right, 'right', delay)}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {!isExpanded && (
            <div className="timeline-fade-overlay">
              <button className="btn btn-primary show-more-btn" onClick={() => setIsExpanded(true)}>
                Show Full Timeline <FiChevronDown style={{ marginLeft: 8 }} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
