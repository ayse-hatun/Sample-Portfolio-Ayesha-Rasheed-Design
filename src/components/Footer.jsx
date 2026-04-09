import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons'
import './Footer.css'

const socials = [
  { label: 'GITHUB',   href: 'https://github.com/ayse-hatun/',                           icon: <GithubIcon size={16} strokeWidth={1.5} /> },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/ayesha-rasheed-khan/',         icon: <LinkedinIcon size={16} strokeWidth={1.5} /> },
  { label: 'EMAIL',    href: 'mailto:ayesharasheedkhan64@gmail.com',                     icon: <Mail size={16} strokeWidth={1.5} /> },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__name">Ayesha</h2>
            <p className="uppercase-sm">Meta Ads Expert · Full-Stack Developer · Digital Trainer</p>
          </div>
          
          <div className="footer__social-links">
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social-item">
                <span className="uppercase-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__divider" />

        <div className="footer__bottom">
          <div className="footer__copyright uppercase-sm">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
          <button className="footer__scroll-top uppercase-sm" onClick={scrollToTop}>
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
