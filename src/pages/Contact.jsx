import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowRight, Loader2, CheckCircle2, Clock } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '../components/Icons'
import { transitionPremium, fadeUp, staggerContainer } from '../utils/motion'
import Magnetic from '../components/Magnetic'
import './Contact.css'

const contactInfo = [
  { icon: <Mail size={18} strokeWidth={1} />, label: 'EMAIL',     value: 'ayesharasheeedkhan64@gmail.com',    href: 'mailto:ayesharasheedkhan64@gmail.com' },
  { icon: <LinkedinIcon size={18} strokeWidth={1} />, label: 'LINKEDIN',  value: 'linkedin.com/in/ayesha', href: 'https://linkedin.com/in/AyeshaRasheed' },
  { icon: <GithubIcon size={18} strokeWidth={1} />, label: 'GITHUB',    value: 'github.com/ayesha',   href: 'https://github.com/AyeshaRasheed' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]     = useState('idle') // idle | loading | success | error
  const [time, setTime]         = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const pkTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Simulate API call
    await new Promise(r => setTimeout(r, 2000))
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <motion.main
      className="contact"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* ── Header ── */}
      <section className="section contact-hero">
        <div className="container">
          <motion.div className="section-header" variants={fadeUp}>
            <p className="uppercase-sm">Get in Touch / —</p>
            <h1 className="section-title-large">Contact Me</h1>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="section" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="contact-grid-stark">
            {/* Form Side */}
            <motion.div 
              className="contact-form-side"
              variants={staggerContainer(0.1)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <form className="contact-form-stark" onSubmit={handleSubmit}>
                <div className="contact-form-stark__grid">
                  <motion.div className="contact-field-stark" variants={fadeUp}>
                    <label className="uppercase-sm" htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Write your name here"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  <motion.div className="contact-field-stark" variants={fadeUp}>
                    <label className="uppercase-sm" htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                <motion.div className="contact-field-stark" variants={fadeUp}>
                  <label className="uppercase-sm" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Briefly describe your inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div className="contact-field-stark" variants={fadeUp}>
                  <label className="uppercase-sm" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.button 
                  type="submit" 
                  variants={fadeUp}
                  className="contact-submit-btn-stark uppercase-sm"
                  disabled={status === 'loading'}
                  data-cursor="SEND"
                >
                  {status === 'loading' ? (
                    <>Sending <Loader2 className="animate-spin" size={16} /></>
                  ) : status === 'success' ? (
                    <>Message Sent <CheckCircle2 size={16} /></>
                  ) : (
                    <>Send Inquiry <ArrowRight size={16} /></>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Side */}
            <div className="contact-info-side">
              <motion.div 
                className="contact-info-stark"
                variants={staggerContainer(0.1, 0.4)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.p className="uppercase-sm contact-info-stark__label" variants={fadeUp}>Contact Details</motion.p>
                <div className="contact-details-stark">
                  {contactInfo.map((info) => (
                    <motion.div key={info.label} className="contact-detail-stark" variants={fadeUp}>
                      <div className="contact-detail-stark__icon">{info.icon}</div>
                      <div className="contact-detail-stark__body">
                        <p className="uppercase-sm">{info.label}</p>
                        {info.href ? (
                          <Magnetic strength={0.2}>
                            <a 
                              href={info.href} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="contact-detail-stark__value"
                              data-cursor="LINK"
                            >
                              {info.value}
                            </a>
                          </Magnetic>
                        ) : (
                          <span className="contact-detail-stark__value">{info.value}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Location & Time */}
                  <motion.div className="contact-detail-stark" variants={fadeUp}>
                    <div className="contact-detail-stark__icon"><MapPin size={18} strokeWidth={1} /></div>
                    <div className="contact-detail-stark__body">
                       <p className="uppercase-sm">LOCATION</p>
                       <span className="contact-detail-stark__value">Karachi, Pakistan (GMT+5)</span>
                    </div>
                  </motion.div>

                  <motion.div className="contact-detail-stark" variants={fadeUp}>
                    <div className="contact-detail-stark__icon"><Clock size={18} strokeWidth={1} /></div>
                    <div className="contact-detail-stark__body">
                       <p className="uppercase-sm">LOCAL TIME</p>
                       <span className="contact-detail-stark__value font-mono">{pkTime}</span>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="contact-availability-stark"
                  variants={fadeUp}
                >
                  <div className="contact-availability-stark__dot" />
                  <p className="uppercase-sm">Available for new opportunities</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
