import { useEffect, useRef } from 'react'
import { FaReddit } from 'react-icons/fa'

const googleLogo = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg";
const gsocLogo = "https://developers.google.com/open-source/gsoc/resources/downloads/GSoC-icon.svg";

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
  icon: <img src={gsocLogo} alt="GSoC" style={{width: 24, height: 24}} />,
  focus: 5,
  date: "May 2021 - Aug 2021",
};

const unixporn = {
  id: "unixporn",
  title: "r/unixporn Viral Setup",
  subtitle: "Dotfiles Configuration",
  description: "I designed a highly customized, keyboard-driven Linux workflow. My dotfiles went viral, earning hundreds of stars on GitHub.",
  icon: <FaReddit color="#ff4500" style={{fontSize: '1.4rem'}} />,
  focus: 5,
  date: "2021",
};

const cp = {
  id: "cp",
  title: "Competitive Programming",
  subtitle: "Codeforces & Codechef",
  description: "I competed intensely in algorithms, reaching Expert on Codeforces and 5-stars on Codechef (Top 1%). Also qualified as an ACM ICPC Regionalist.",
  icon: <span style={{fontSize: '1.2rem'}}>🏆</span>,
  focus: 3,
  date: "2021 - 2022",
};

const hackdefine = {
  id: "hackdefine",
  title: "Hackdefine Winner",
  subtitle: "Filecoin Track",
  description: "I won the Hackdefine Filecoin track by building the Hir3 project, a decentralized application.",
  icon: <span style={{fontSize: '1.2rem'}}>🥇</span>,
  focus: 4,
  date: "2022",
};

const googleIntern = {
  id: "google-intern",
  title: "Google Intern",
  subtitle: "Knowledge Graph Team",
  description: "I built OLAP-based analytics tools to evaluate Knowledge Graph schema changes, saving 170+ engineering hours per quarter.",
  icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
  focus: 5,
  date: "Jan 2023 - Jul 2023",
};

const googleFteSearch = {
  id: "google-fte-search",
  title: "Google FTE",
  subtitle: "Search Platforms",
  description: "I architected telemetry frameworks and led DMA compliance for Spanner, reducing incident detection latency by 70%.",
  icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
  focus: 5,
  date: "Aug 2023 - Aug 2024",
};

const googleFteWorkspace = {
  id: "google-fte-workspace",
  title: "Google Workspace",
  subtitle: "Workspace Team",
  description: "Currently I'm building high-scale distributed systems and developer tooling for Google Workspace.",
  icon: <img src={googleLogo} alt="Google" style={{width: 20, height: 20}} />,
  focus: 5,
  date: "Aug 2024 - Present",
};

const stocksage = {
  id: "stocksage",
  title: "StockSage AI",
  subtitle: "AI Agents Challenge",
  description: "I architected an AI-powered stock intelligence platform leveraging LLMs and RAG, featuring dynamic portfolio exit strategies.",
  icon: <span style={{fontSize: '1.2rem'}}>🤖</span>,
  focus: 5,
  date: "2026",
};

const eras = [
  {
    title: "Early Career & Open Source",
    columns: [
      {
        id: 'col-parallel',
        type: 'parallel',
        topItems: [openwisp, gsoc],
        bottomItems: [unixporn, cp]
      },
      {
        id: 'col-hackdefine',
        type: 'single',
        topItems: [hackdefine],
        bottomItems: []
      },
      {
        id: 'col-google-intern',
        type: 'single',
        topItems: [],
        bottomItems: [googleIntern]
      }
    ]
  },
  {
    title: "Professional Career",
    columns: [
      {
        id: 'col-google-fte1',
        type: 'single',
        topItems: [googleFteSearch],
        bottomItems: []
      },
      {
        id: 'col-google-fte2',
        type: 'single',
        topItems: [],
        bottomItems: [googleFteWorkspace]
      },
      {
        id: 'col-stocksage',
        type: 'single',
        topItems: [stocksage],
        bottomItems: []
      }
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

  const renderNode = (item: any, position: 'top' | 'bottom', delay: number) => {
    return (
      <div className={`track-node track-node-${position}`} key={item.id} style={{ transitionDelay: `${delay}s` }}>
        <div className="track-node-connector"></div>
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
      <div className="container" style={{ maxWidth: '100%' }}>
        <p className="section-label">Summary</p>
        <h2 className="section-title">Career Highlights</h2>
        <p className="section-subtitle">A timeline detailing my path through Early Career and into the Industry.</p>
        
        <div className="flowchart-wrapper">
          {eras.map((era, eraIdx) => (
            <div className="flowchart-era" key={era.title}>
              <div className="era-floating-title-container">
                <h3 className="era-floating-title">{era.title}</h3>
              </div>
              <div className="flowchart-era-columns">
                {era.columns.map((col, colIdx) => (
                  <div className={`flowchart-column ${col.type === 'parallel' ? 'flowchart-column-parallel' : ''}`} key={col.id}>
                    <div className="spine-dot"></div>
                    
                    <div className="column-top">
                      {col.topItems.map((item, i) => renderNode(item, 'top', 0.1 + ((eraIdx * 3 + colIdx) * 0.1) + (i * 0.1)))}
                    </div>
                    
                    <div className="column-bottom">
                      {col.bottomItems.map((item, i) => renderNode(item, 'bottom', 0.1 + ((eraIdx * 3 + colIdx) * 0.1) + (i * 0.1)))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flowchart-spine"></div>
        </div>
      </div>
    </section>
  )
}
