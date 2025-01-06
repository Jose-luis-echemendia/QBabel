export const fadeIn = (position) => {
  return {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 2.0,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
        staggerChildren: 0.5,
        delayChildren: 1,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    hidden: {
      y: position === "bottom" ? -80 : 80,
      x: position === "right" ? 80 : 0,
      opacity: 0,
      filter: "blur(4px)",
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.25, 0.25, 0.25, 0.25],
        staggerChildren: 0.2,
      },
    },
  };
};

