/**
 * PREMIUM MOTION SYSTEM
 * Easing and transition constants for high-end editorial motion.
 */

export const transitionPremium = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth reveal
}

export const transitionSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  restDelta: 0.001
}

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: transitionPremium 
  },
}

export const fadeScale = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: transitionPremium 
  },
}

/**
 * Letter animation for masked reveals
 */
export const letterReveal = {
  initial: { y: "150%" },
  animate: { 
    y: 0, 
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    }
  }
}
