import { useState } from 'react'
import { FiCopy, FiLinkedin, FiCheck } from 'react-icons/fi'

interface ContactPopoverProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ContactPopover({ children, className, id }: ContactPopoverProps) {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('purhan01@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div 
      className={`popover-container ${className || ''}`} 
      id={id}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
      style={{ position: 'relative', display: 'inline-flex', cursor: 'pointer' }}
    >
      {children}
      {show && (
        <div className="popover-tooltip">
          <p className="popover-text">You can reach out to me via email or LinkedIn.</p>
          <div className="popover-actions">
            <div className="popover-email-box">
              <span className="popover-email">purhan01@gmail.com</span>
              <button onClick={copyEmail} className="popover-copy-btn" aria-label="Copy email">
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>
            <a href="https://www.linkedin.com/in/purhan" target="_blank" rel="noreferrer" className="popover-linkedin-btn" onClick={e => e.stopPropagation()}>
              <FiLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
