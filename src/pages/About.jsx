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
  { year: '2021', title: 'STARTED CODING JOURNEY', desc: 'Discovered my passion for web development through self-learning, building my first projects with HTML, CSS, and JavaScript.', icon: <Rocket size={20} strokeWidth={1} /> },
  { year: '2022', title: 'FIRST FREELANCE CLIENT', desc: 'Delivered a full-stack web application for my first client, earning hands-on production experience with React and Node.js.', icon: <Briefcase size={20} strokeWidth={1} /> },
  { year: '2023', title: 'DIGITAL LITERACY TRAINER', desc: 'Joined a national initiative to design and deliver digital literacy curricula, training 5,000+ students in digital skills and AI tools.', icon: <GraduationCap size={20} strokeWidth={1} /> },
  { year: '2024', title: 'META ADS EXPERT', desc: 'Specialized in Meta Ads campaign strategy & management — driving ROI through creative ad design, audience targeting, and performance analytics.', icon: <Zap size={20} strokeWidth={1} /> },
  { year: '2025', title: 'OPEN FOR OPPORTUNITIES', desc: 'Seeking impactful roles combining full-stack development, digital marketing expertise, and a passion for AI-driven innovation.', icon: <Star size={20} strokeWidth={1} /> },
]

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: <Code size={24} strokeWidth={1} />,
    skills: ['React.js / Next.js', 'HTML5 / CSS3', 'Tailwind CSS', 'Framer Motion', 'JavaScript (ES6+)']
  },
  {
    title: 'BACKEND',
    icon: <Settings size={24} strokeWidth={1} />,
    skills: ['Node.js / Express.js', 'Python / FastAPI', 'REST APIs', 'GraphQL']
  },
  {
    title: 'DATABASE & CLOUD',
    icon: <Cloud size={24} strokeWidth={1} />,
    skills: ['MongoDB', 'MySQL / Firebase', 'AWS', 'Vercel Deployment']
  },
  {
    title: 'DIGITAL MARKETING',
    icon: <Globe size={24} strokeWidth={1} />,
    skills: ['Meta Ads Strategy', 'Ad Creative Design', 'Audience Targeting', 'ROI Optimization', 'Performance Analytics']
  },
]

const funFacts = [
  { icon: <Coffee size={32} strokeWidth={1} />, title: 'CHAI POWERED', desc: 'Fueled by endless cups of chai — my best ideas come mid-sip.' },
  { icon: <Moon size={32} strokeWidth={1} />, title: 'NIGHT OWL', desc: 'My sharpest code and campaigns get crafted after midnight.' },
  { icon: <BookOpen size={32} strokeWidth={1} />, title: 'ALWAYS LEARNING', desc: 'Currently deep-diving into AI tools, automation, and generative design.' },
  { icon: <Globe size={32} strokeWidth={1} />, title: 'TRAINER AT HEART', desc: 'Passionate about simplifying complex tech — trained 5,000+ students and counting.' },
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
                Meta Ads Expert, Full-Stack Developer &amp; Digital Literacy Trainer
              </h1>
              <p className="about-hero__desc">
                I'm <strong>Ayesha Rasheed Khan</strong> — a dynamic professional combining expertise in Meta Ads campaign strategy, full-stack web development (MERN &amp; beyond), and AI-powered digital literacy training. I turn ideas into measurable results — whether through high-ROI ad campaigns, scalable web apps, or empowering students with cutting-edge digital skills.
              </p>
            </motion.div>
            <motion.div 
              className="about-hero__location uppercase-sm"
              variants={fadeUp}
              transition={{ delay: 0.6 }}
            >
              LOCATED IN<br />LAHORE, PK
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
            <h2 className="section-title-large">Skills & Expertise</h2>
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
