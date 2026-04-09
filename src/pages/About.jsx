import { motion } from 'framer-motion'
import { 
  Rocket, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  Star, 
  Code, 
  Settings, 
  Cloud, 
  Coffee, 
  Moon, 
  BookOpen, 
  Globe 
} from 'lucide-react'
import { transitionPremium, fadeUp, staggerContainer } from '../utils/motion'
import './About.css'

const timeline = [
  { year: '2021', title: 'STARTED CODING JOURNEY', desc: 'Discovered my passion for web development through self-learning and online courses.', icon: <Rocket size={20} strokeWidth={1} /> },
  { year: '2022', title: 'FIRST FREELANCE CLIENT', desc: 'Delivered a full-stack e-commerce platform, earning my first professional experience.', icon: <Briefcase size={20} strokeWidth={1} /> },
  { year: '2023', title: 'DIGITAL LITERACY TRAINER', desc: 'Joined a national initiative to train 5,000+ students in digital skills and web literacy.', icon: <GraduationCap size={20} strokeWidth={1} /> },
  { year: '2024', title: 'ADVANCED FULL STACK', desc: 'Mastered React, Node.js, and cloud deployments while building production-grade apps.', icon: <Zap size={20} strokeWidth={1} /> },
  { year: '2025', title: 'OPEN FOR OPPORTUNITIES', desc: 'Seeking impactful roles to combine development expertise and educational passion.', icon: <Star size={20} strokeWidth={1} /> },
]

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: <Code size={24} strokeWidth={1} />,
    skills: ['React / Next.js', 'TypeScript', 'CSS / Tailwind', 'Framer Motion']
  },
  {
    title: 'BACKEND',
    icon: <Settings size={24} strokeWidth={1} />,
    skills: ['Node.js / Express', 'Python / Django', 'REST APIs', 'GraphQL']
  },
  {
    title: 'DATABASE & CLOUD',
    icon: <Cloud size={24} strokeWidth={1} />,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS / Vercel']
  },
]

const funFacts = [
  { icon: <Coffee size={32} strokeWidth={1} />, title: 'COFFEE DRIVEN', desc: 'Powered by endless cups of chai and the will to ship.' },
  { icon: <Moon size={32} strokeWidth={1} />, title: 'NIGHT OWL', desc: 'My best code gets written after midnight. Always.' },
  { icon: <BookOpen size={32} strokeWidth={1} />, title: 'ALWAYS LEARNING', desc: 'Currently exploring AI, machine learning, and Web3.' },
  { icon: <Globe size={32} strokeWidth={1} />, title: 'GLOBAL MINDSET', desc: 'Collaborated with teams across 10+ countries.' },
]

export default function About() {
  return (
    <motion.main
      className="about"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Header ── */}
      <section className="section about-hero">
        <div className="container">
          <div className="about-hero__grid">
            <motion.div 
              className="about-hero__meta uppercase-sm"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              (ABOUT AYESHA)<br />VERSION 2.0
            </motion.div>
            <motion.div 
              className="about-hero__content"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <h1 className="about-hero__title">
                Passionate Builder & Lifelong Learner
              </h1>
              <p className="about-hero__desc">
                I'm <strong>Ayesha Rasheed</strong> — a Full Stack Developer and Digital Literacy Trainer
                who believes technology should empower everyone. I build clean, scalable web applications
                and teach others to do the same. My mission is to bridge the gap between technology and
                human potential.
              </p>
            </motion.div>
            <motion.div 
              className="about-hero__location uppercase-sm"
              variants={fadeUp}
              transition={{ delay: 0.6 }}
            >
              LOCATED IN<br />KARACHI, PK
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <motion.section 
        className="section journey"
        variants={staggerContainer(0.1, 0.2)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-10%" }}
      >
        <div className="container">
          <div className="section-header">
            <motion.p variants={fadeUp} className="uppercase-sm">01. Timeline</motion.p>
            <motion.h2 variants={fadeUp} className="section-title-large">My Journey</motion.h2>
          </div>

          <div className="timeline">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                variants={{
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0, transition: transitionPremium }
                }}
              >
                <div className="timeline-item__meta uppercase-sm">
                   {item.year} / —
                </div>
                <div className="timeline-item__content">
                  <div className="timeline-item__header">
                    <span className="timeline-item__icon">{item.icon}</span>
                    <h3 className="timeline-item__title">{item.title}</h3>
                  </div>
                  <p className="timeline-item__desc">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Skills ── */}
      <motion.section 
        className="section skills-section"
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="section-header">
            <motion.p variants={fadeUp} className="uppercase-sm">02. Expertise</motion.p>
            <h2 className="section-title-large">Technical Stack</h2>
          </div>

          <div className="skills-grid-stark">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                className="skill-card-stark"
                variants={fadeUp}
              >
                <div className="skill-card-stark__icon">{cat.icon}</div>
                <h3 className="skill-card-stark__title">{cat.title}</h3>
                <ul className="skill-card-stark__list">
                  {cat.skills.map(skill => (
                    <li key={skill} className="uppercase-sm">{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Fun Facts ── */}
      <motion.section 
        className="section facts-section"
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="facts-grid-stark">
            {funFacts.map((f, i) => (
              <motion.div
                key={f.title}
                className="fact-card-stark"
                variants={fadeUp}
                data-cursor="LEARN"
              >
                <div className="fact-card-stark__icon">{f.icon}</div>
                <h4 className="fact-card-stark__title">{f.title}</h4>
                <p className="fact-card-stark__desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
