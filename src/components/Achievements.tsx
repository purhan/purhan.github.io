import { useEffect, useRef } from 'react'

const achievements = [
  { icon: '🏆', text: <><strong>Winner</strong> — Hackdefine 2022, Filecoin Track</> },
  { icon: '⭐', text: <><strong>Codeforces Expert</strong> — Top-rated competitive programmer</> },
  { icon: '🌟', text: <><strong>5★ CodeChef</strong> — Peak rating 2170, top 1% globally</> },
  { icon: '🌍', text: <><strong>ACM ICPC 2021 & 2022</strong> Regionalist</> },
  { icon: '🥇', text: <><strong>National Rank 6</strong> — LeetCode Weekly Contest 274</> },
  { icon: '🎖️', text: <><strong>LeetCode Knight Badge</strong> — Top 5% of all participants</> },
  { icon: '🌐', text: <><strong>Global Rank 78</strong> — CodeChef Starters 32</> },
  { icon: '🌐', text: <><strong>Global Rank 89</strong> — CodeChef Starters 27</> },
]

export default function Achievements() {
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
    <section className="section" id="achievements" ref={ref}>
      <div className="container">
        <p className="section-label">Honours</p>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Competitive programming highlights and hackathon wins.</p>
        <div className="achievements__grid">
          {achievements.map((a, i) => (
            <div
              className="achievement-card fade-up"
              key={i}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="achievement-card__icon">{a.icon}</div>
              <p className="achievement-card__text">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
