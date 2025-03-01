import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

export const useInfinityCarousel = ({
  fastSpeed = 100,
  slowSpeed = 160,
  direction = "left", // "left" o "right"
}) => {
  const FASTSPEED = fastSpeed;
  const SLOWSPEED = slowSpeed;
  const [speed, setSpeed] = useState(FASTSPEED);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    if (width === 0) return;

    const startPosition = direction === "left" ? 0 : -width / 2;
    const endPosition = direction === "left" ? -width / 2 : 0;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), endPosition], {
        ease: "linear",
        duration: speed,
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [startPosition, endPosition], {
        ease: "linear",
        duration: speed, 
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls.stop();
  }, [rerender, speed, width, direction]);

  const handleHoverStart = () => {
    setMustFinish(true);
    setSpeed(SLOWSPEED);
  };
  const handleHoverEnd = () => {
    setMustFinish(true);
    setSpeed(FASTSPEED);
  };

  return {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
  };
};
