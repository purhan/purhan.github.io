import { useState, useRef } from 'react'
import { FiCopy, FiLinkedin, FiCheck, FiX } from 'react-icons/fi'

interface ContactPopoverProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export default function ContactPopover({ children, className, id }: ContactPopoverProps) {
  const [show, setShow] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isPermanent, setIsPermanent] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('purhan01@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShow(true);
  }

  const handleMouseLeave = () => {
    if (isPermanent) return;
    timerRef.current = setTimeout(() => {
      setShow(false);
    }, 2000);
  }

  const handleClick = () => {
    setIsPermanent(true);
    setShow(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  }

  const closePermanent = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPermanent(false);
    setShow(false);
  }

  return (
    <div 
      className={`popover-container ${className || ''}`} 
      id={id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: 'relative', display: 'inline-flex', cursor: 'pointer' }}
    >
      {children}
      {show && (
        <div 
          className="popover-tooltip popover-tooltip-top"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={e => e.stopPropagation()}
        >
          {isPermanent && (
            <button className="popover-close-btn" onClick={closePermanent} aria-label="Close">
              <FiX />
            </button>
          )}
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
