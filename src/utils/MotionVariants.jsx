export const createFadeIn = ({ position = "bottom", duration = 2.0, delay = 0.5, repeat = Infinity } = {}) => {
  return {
    visible: {
      y: position === "bottom" ? 0 : position === "top" ? -80 : 0,
      x: position === "right" ? 0 : position === "left" ? 80 : 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
        repeat,
        repeatType: "reverse",
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : position === "top" ? 80 : 0,
      x: position === "right" ? 80 : position === "left" ? -80 : 0,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};

export const createContainerVariants = ({ staggerChildren = 0.3, delayChildren = 0.2 } = {}) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});


export const createChildrenVariants = ({ yOffset = 20, blurAmount = 4, duration = 2.0 } = {}) => ({
  hidden: { opacity: 0, y: yOffset, filter: `blur(${blurAmount}px)` },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { stiffness: 1000, velocity: -100, duration },
  },
});


