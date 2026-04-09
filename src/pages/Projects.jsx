import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import { GithubIcon } from '../components/Icons'
import { transitionPremium, fadeUp, staggerContainer } from '../utils/motion'
import './Projects.css'

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Training']

const projects = [
  {
    id: 1, category: 'Full Stack',
    title: 'EduConnect LMS',
    desc: 'A comprehensive Learning Management System enabling 5,000+ students to access digital literacy courses.',
    longDesc: 'Built a full-stack LMS with real-time progress tracking, video streaming, quiz engine, certificate generation, and admin dashboard. Implemented JWT auth and role-based access.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    stats: ['5K+ Students', '200+ Courses', '98% Satisfaction'],
  },
  {
    id: 2, category: 'Full Stack',
    title: 'ShopFlow E-Commerce',
    desc: 'A production-ready e-commerce platform with real-time inventory management, Stripe payments, and analytics.',
    longDesc: 'Full-stack e-commerce with cart, wishlist, order tracking, Stripe checkout, email notifications, seller dashboard, and inventory management.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Prisma'],
    stats: ['500+ Products', '$50K Revenue', '99.9% Uptime'],
  },
  {
    id: 3, category: 'Full Stack',
    title: 'DevCollab Hub',
    desc: 'Real-time collaboration tool for development teams featuring code review and task tracking.',
    longDesc: 'Built with WebSockets for real-time updates, integrated with GitHub API for PR reviews, Kanban board, time tracking, and Slack notifications.',
    tech: ['React', 'Socket.io', 'Express', 'MongoDB', 'GitHub API'],
    stats: ['1K+ Teams', '10K+ PRs', '4.9 ⭐ Rating'],
  },
  {
    id: 4, category: 'Frontend',
    title: 'FinanceFlow Dashboard',
    desc: 'A stunning data visualization dashboard for personal finance tracking with interactive charts.',
    longDesc: 'Built an interactive finance dashboard with D3.js charts, spending heatmaps, budget alerts, export to PDF, and dark/light mode support.',
    tech: ['React', 'D3.js', 'Tailwind', 'Recharts'],
    stats: ['Real-time Data', '12 Chart Types', 'PWA Ready'],
  },
  {
    id: 5, category: 'Backend',
    title: 'API Gateway Service',
    desc: 'A robust API gateway handling authentication, rate limiting, and request routing for microservices.',
    longDesc: 'Microservices API gateway with OAuth2, JWT, Redis caching, rate limiting, circuit breaker pattern, and Prometheus monitoring integration.',
    tech: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'Prometheus'],
    stats: ['10M+ Req/Day', '<50ms Latency', '99.99% SLA'],
  },
  {
    id: 6, category: 'Training',
    title: 'Digital Skills Academy',
    desc: 'Developed and delivered a comprehensive digital literacy curriculum training 5,000+ students.',
    longDesc: 'Designed 40+ hour curriculum covering internet safety, MS Office, basic coding, and professional communication. Conducted workshops, assessments, and certification programs.',
    tech: ['Curriculum Design', 'PowerPoint', 'Google Classroom', 'Zoom'],
    stats: ['5K+ Trained', '20 Workshops', '92% Pass Rate'],
  },
]

export default function Projects() {
  const [active, setActive]   = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <motion.main
      className="projects"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Header ── */}
      <section className="section projects-header">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <p className="uppercase-sm">Selected Cases / —</p>
            <h1 className="section-title-large">Portfolio</h1>
          </motion.div>

          <motion.div 
            className="projects__filters"
            variants={staggerContainer(0.05)}
            initial="initial"
            animate="animate"
          >
            {categories.map(cat => (
              <motion.button
                key={cat}
                variants={fadeUp}
                className={`projects__filter-btn uppercase-sm ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <motion.div 
            className="projects__grid-stark"
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  variants={fadeUp}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="project-card-stark"
                  onClick={() => setSelected(p)}
                  data-cursor="CASE"
                >
                  <motion.div 
                    className="project-card-stark__image"
                    whileHover={{ scale: 1.05 }}
                    transition={transitionPremium}
                  >
                    <span>ITEM 0{p.id}</span>
                  </motion.div>
                  <div className="project-card-stark__body">
                    <div className="project-card-stark__meta uppercase-sm">
                      {p.category}
                    </div>
                    <h3 className="project-card-stark__title">{p.title}</h3>
                    <p className="project-card-stark__desc">{p.desc}</p>
                    <div className="project-card-stark__footer">
                      <span className="uppercase-sm">Explore Case Study</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Modal (Drawer) ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay-stark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="modal-stark"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={transitionPremium}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-stark__close" onClick={() => setSelected(null)}>
                <X size={24} strokeWidth={1} />
              </button>

              <div className="modal-stark__content">
                <p className="uppercase-sm modal-stark__cat">{selected.category}</p>
                <h2 className="modal-stark__title">{selected.title}</h2>
                <div className="modal-stark__divider" />
                
                <p className="modal-stark__desc">{selected.longDesc}</p>

                <div className="modal-stark__section">
                  <p className="uppercase-sm modal-stark__label">Tech Stack</p>
                  <ul className="modal-stark__list">
                    {selected.tech.map(t => <li key={t} className="uppercase-sm">{t}</li>)}
                  </ul>
                </div>

                <div className="modal-stark__section">
                  <p className="uppercase-sm modal-stark__label">Performance</p>
                  <ul className="modal-stark__list">
                    {selected.stats.map(s => <li key={s} className="uppercase-sm">{s}</li>)}
                  </ul>
                </div>

                <div className="modal-stark__actions">
                  <a href="#" className="btn-link uppercase-sm">Live Demo <ExternalLink size={14} /></a>
                  <a href="#" className="btn-link uppercase-sm">GitHub Repo <GithubIcon size={14} /></a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  )
}
