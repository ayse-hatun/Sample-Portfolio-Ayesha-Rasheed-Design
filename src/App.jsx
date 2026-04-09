import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          {/* Transition Overlay (Exit) */}
          <motion.div
            className="page-wipe"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: '#000', 
              zIndex: 9999, 
              transformOrigin: 'bottom' 
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              <Route path="/"        element={<Home />} />
              <Route path="/about"   element={<About />} />
              <Route path="/projects"element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </motion.div>

          {/* Entrance Overlay (Enter) */}
          <motion.div
            className="page-wipe"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              right: 0, 
              bottom: 0, 
              backgroundColor: '#000', 
              zIndex: 9999, 
              transformOrigin: 'top' 
            }}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
