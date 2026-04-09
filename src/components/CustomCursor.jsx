import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      const hoverData = target.closest('[data-cursor]');
      
      if (hoverData) {
        setIsHovering(true);
        setCursorText(hoverData.getAttribute('data-cursor') || '');
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovering(true);
        setCursorText('');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${isHovering ? 'custom-cursor--hover' : ''}`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="custom-cursor__dot" />
      {cursorText && (
        <motion.span 
          className="custom-cursor__text uppercase-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
