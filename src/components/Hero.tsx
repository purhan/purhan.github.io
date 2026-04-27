import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for Collaboration
          </div>

          <h1 className="hero__name">Purhan Kaushik</h1>

          <p className="hero__title">
            Software Engineer at <span>Google</span>
          </p>

          <p className="hero__desc">
            Building high-scale distributed systems, data compliance infrastructure,
            and developer tooling. Bridging performance-critical backends with seamless
            developer experiences.
          </p>

          <div className="hero__cta">
            <a
              href="#projects"
              id="hero-view-work"
              className="btn btn-primary"
            >
              View My Work
            </a>
            <a
              href="/Resume.pdf"
              download
              id="hero-resume"
              className="btn btn-outline"
            >
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/purhan"
              target="_blank"
              rel="noreferrer"
              id="hero-github"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/purhan"
              target="_blank"
              rel="noreferrer"
              id="hero-linkedin"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:purhan01@gmail.com"
              id="hero-email"
              className="social-link"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero__avatar-wrap">
          <div className="hero__avatar-ring">
            <img
              src="/user_picture.png"
              alt="Purhan Kaushik"
              className="hero__avatar"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
