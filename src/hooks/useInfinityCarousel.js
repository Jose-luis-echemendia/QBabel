import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

export const useInfinityCarousel = ({ fastSpeed = 100, slowSpeed = 160 }) => {
  const [duration, setDuration] = useState(fastSpeed);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2 - 8; // Posición final para el desplazamiento

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop?.();
  }, [rerender, xTranslation, duration, width]);

  const handleHoverStart = () => {
    setMustFinish(true);
    setDuration(slowSpeed);
  };

  const handleHoverEnd = () => {
    setMustFinish(true);
    setDuration(fastSpeed);
  };

  return {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
  };
};