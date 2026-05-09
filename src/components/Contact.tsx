import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const links = [
  { icon: <FiGithub />,   label: 'GitHub',   href: 'https://github.com/purhan',              id: 'contact-github'   },
  { icon: <FiLinkedin />, label: 'LinkedIn',  href: 'https://www.linkedin.com/in/purhan',     id: 'contact-linkedin' },
  { icon: <FiMail />,     label: 'Email',     href: 'mailto:purhan01@gmail.com',               id: 'contact-email'    },
]

export default function Contact() {
  return (
    <>
      <section className="section" id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="contact__inner">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Connect</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 8 }}>
              I'm always open to interesting conversations, collaborations, or new opportunities.
              Whether you're an employer, a fellow engineer, or just want to say hi — my inbox is open.
            </p>
            <div className="contact__links">
              {links.map(l => (
                <a
                  key={l.id}
                  id={l.id}
                  href={l.href}
                  className="contact-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.icon}
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Built with <span>♥</span> by Purhan Kaushik · {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
