import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Asterisk, Menu, X, Globe } from 'lucide-react'
import { LinkedinIcon, TwitterIcon } from './Icons'
import { transitionSpring, transitionPremium } from '../utils/motion'
import Magnetic from './Magnetic'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

const leftLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Services' }, // Mapping 'Services' to About for now as it contains skillset
  { to: '/contact', label: 'Contact' },
]

const rightLinks = [
  { href: 'https://linkedin.com', icon: 'linkedin' },
  { href: 'https://twitter.com',  icon: 'twitter' },
]

const drawerLinkVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: transitionPremium },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Mobile Header */}
        <div className="navbar__mobile-header">
           <NavLink to="/" className="navbar__mobile-logo">
             <motion.div whileHover={{ rotate: 180 }} transition={transitionSpring}>
               <Asterisk size={24} strokeWidth={1} />
             </motion.div>
           </NavLink>
           <button 
             className="navbar__toggle" 
             onClick={() => setMenuOpen(!menuOpen)}
             aria-label="Toggle Menu"
           >
             {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
           </button>
        </div>

        <div className="navbar__desktop">
          {/* Left Links */}
          <div className="navbar__section navbar__section--left">
            {leftLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Center Logo */}
          <div className="navbar__section navbar__section--center">
            <Magnetic strength={0.2}>
              <NavLink to="/" className="navbar__logo">
                <span className="navbar__logo-symbol">AR</span>
                <span className="navbar__logo-text">ayesha</span>
              </NavLink>
            </Magnetic>
          </div>

          {/* Right Links */}
          <div className="navbar__section navbar__section--right">
            <div className="navbar__socials">
              <Magnetic strength={0.3}><a href="#" className="navbar__social-icon"><Globe size={18} strokeWidth={1.5} /></a></Magnetic>
              <Magnetic strength={0.3}><a href="https://linkedin.com" className="navbar__social-icon" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /></a></Magnetic>
              <Magnetic strength={0.3}><a href="https://twitter.com" className="navbar__social-icon" target="_blank" rel="noopener noreferrer"><TwitterIcon size={18} /></a></Magnetic>
            </div>
            
            <ThemeToggle />

            <Magnetic strength={0.15}>
              <NavLink to="/contact" className="btn-capsule">
                Hire Me!
              </NavLink>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__drawer"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={transitionPremium}
          >
            <div className="navbar__drawer-content">
              {leftLinks.map((link, i) => (
                <motion.div 
                  key={link.to} 
                  variants={drawerLinkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink to={link.to} className="navbar__drawer-link">
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="navbar__drawer-divider" />
              {rightLinks.map((link, i) => (
                <motion.div 
                  key={link.label}
                  variants={drawerLinkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: (leftLinks.length + i) * 0.1 }}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="navbar__drawer-link navbar__drawer-link--small">
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
