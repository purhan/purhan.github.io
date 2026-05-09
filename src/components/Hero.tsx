import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import ContactPopover from './ContactPopover'
import { useState } from 'react'

export default function Hero() {
  const [showSnackbar, setShowSnackbar] = useState(false)

  const handleCollabClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('hero-contact')?.click();
  }

  const handleEmailCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('purhan01@gmail.com');
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  }

  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <a
            href="#hero-contact"
            className="hero__badge"
            id="hero-collab-badge"
            aria-label="Trigger get in touch popover"
            onClick={handleCollabClick}
          >
            <span className="hero__badge-dot" />
            Available for Collaboration
          </a>

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
              href="#career-highlights"
              id="hero-view-work"
              className="btn btn-primary"
            >
              View My Work
            </a>
            <ContactPopover id="hero-contact" className="btn btn-outline">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FiMail /> Get In Touch</span>
            </ContactPopover>
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
              href="#"
              id="hero-email"
              className="social-link"
              aria-label="Copy Email"
              onClick={handleEmailCopy}
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
      
      {showSnackbar && (
        <div className="snackbar" style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--accent)',
          color: 'var(--bg-primary)',
          padding: '12px 24px',
          borderRadius: '100px',
          fontWeight: 600,
          boxShadow: 'var(--shadow-lg)',
          zIndex: 9999,
          animation: 'fadeUp 0.3s ease-out'
        }}>
          Email copied to clipboard!
        </div>
      )}
    </section>
  )
}
