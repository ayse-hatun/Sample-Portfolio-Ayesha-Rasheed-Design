import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plus, Minus } from 'lucide-react'
import { transitionPremium, staggerContainer, fadeUp, fadeScale } from '../utils/motion'
import './Home.css'

const services = [
  { 
    id: '01', 
    title: 'BRANDING', 
    desc: 'Crafting unique visual identities that resonate with your audience and stand out in the digital landscape.' 
  },
  { 
    id: '02', 
    title: 'PRODUCT DESIGN', 
    desc: 'Creating intuitive, user-centered digital products through research, prototyping, and visual excellence.' 
  },
  { 
    id: '03', 
    title: 'WEB DEVELOPMENT', 
    desc: 'Building high-performance, scalable web applications with modern technologies like React and Node.js.' 
  },
]

const stats = [
  { label: 'Years of Experience', value: '05' },
  { label: 'Client Rating', value: '5.00' },
  { label: 'Total Projects', value: '120+' },
  { label: 'Awards', value: '03' },
]

const projects = [
  { id: 1, title: 'Mockup Design', category: 'Creative', img: '/assets/mockup1.png' },
  { id: 2, title: 'Book Cover', category: 'Editorial', img: '/assets/mockup2.png' },
  { id: 3, title: 'Font Design', category: 'Typography', img: '/assets/mockup3.png' },
  { id: 4, title: 'Application', category: 'Product', img: '/assets/mockup4.png' },
]

export default function Home() {
  const [openService, setOpenService] = useState('02')

  return (
    <motion.main
      className="home"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="container hero__container">
          <div className="hero__layout">
            {/* Left Content */}
            <div className="hero__content-left">
              <motion.div variants={fadeUp} className="hero__intro uppercase-sm">
                Hi 👋, I'm Ayesha Rasheed
              </motion.div>
              <motion.h1 className="hero__title">
                <div className="mask">
                  <motion.span 
                    variants={letterReveal}
                    initial="initial"
                    animate="animate"
                    style={{ display: 'block' }}
                  >
                    BRANDING,
                  </motion.span>
                </div>
                <div className="mask">
                  <motion.span 
                    variants={letterReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.1 }}
                    style={{ display: 'block' }}
                  >
                    PRODUCT UI/UX
                  </motion.span>
                </div>
                <div className="mask">
                  <motion.span 
                    variants={letterReveal}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: 0.2 }}
                    style={{ display: 'block' }}
                  >
                    & DESIGN.
                  </motion.span>
                </div>
              </motion.h1>
              
              <div className="hero__visual-container">
                <motion.div variants={fadeScale} className="hero__circle-bg" />
                <motion.img 
                  variants={fadeUp} 
                  src="/assets/portrait.png" 
                  alt="Ayesha" 
                  className="hero__portrait" 
                />
                
                {/* Floating Badges */}
                <motion.div 
                  className="badge badge--designer"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Designer
                </motion.div>
                <motion.div 
                  className="badge badge--branding"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  Branding
                </motion.div>
              </div>
            </div>

            {/* Right Content */}
            <div className="hero__content-right">
              <div className="hero__signature">
                <span className="font-script">Ayesha Rasheed</span>
              </div>
              
              <motion.div variants={fadeUp} className="hero__expertise-card">
                <p>5+ Years of Expertise, Award-Winning Creative Designer in Karachi, PK.</p>
                <a href="mailto:hello@ayesha.com" className="hero__email">hello@ayesha.com</a>
                <div className="hero__discuss-btn">
                  <span>LET'S<br />DISCUSS</span>
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section className="section services">
        <div className="container">
          <div className="services__header">
            <h2 className="section-title-large outline-text">SERVICES</h2>
          </div>
          <div className="services__list">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`service-item ${openService === service.id ? 'active' : ''}`}
                onClick={() => setOpenService(openService === service.id ? null : service.id)}
              >
                <div className="service-item__header">
                  <h3>{service.title}</h3>
                  {openService === service.id ? <Minus /> : <Plus />}
                </div>
                <AnimatePresence>
                  {openService === service.id && (
                    <motion.div 
                      className="service-item__content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{service.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT / STATS SECTION ── */}
      <section className="section about-stats">
        <div className="container">
          <div className="about-stats__content">
            <motion.div variants={fadeUp} className="about-stats__text">
              <span className="uppercase-sm">ABOUT ME</span>
              <h2>FULL STACK DEVELOPER CRAFTING INTUITIVE, USER-FRIENDLY EXPERIENCES THROUGH CODE & DESIGN.</h2>
            </motion.div>
            
            <div className="about-stats__grid">
              <div className="about-stats__visual">
                 <div className="about-stats__circle">
                    <img src="/assets/portrait.png" alt="Ayesha Small" />
                 </div>
                 <div className="about-stats__download">
                    <span>DOWNLOAD MY CV</span>
                    <ArrowUpRight size={14} />
                 </div>
              </div>
              
              <div className="stats-grid">
                {stats.map((stat, i) => (
                  <div key={i} className="stat-card">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label uppercase-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section portfolio">
        <div className="container">
          <div className="portfolio__header">
            <h2 className="section-title-large">LATEST<br />PORTFOLIO</h2>
          </div>
          <div className="portfolio__grid-editorial">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className={`portfolio-card-editorial card-${index + 1}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="portfolio-card-editorial__img-wrapper">
                  <motion.img 
                    src={project.img} 
                    alt={project.title} 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <div className="portfolio-card-editorial__tag uppercase-sm">
                    {project.title} <ArrowUpRight size={14} />
                  </div>
                </div>
                <div className="portfolio-card-editorial__footer">
                   <span className="uppercase-sm">{project.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="portfolio__footer">
             <Link to="/projects" className="btn-final uppercase-sm">EXPLORE ALL WORKS</Link>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
