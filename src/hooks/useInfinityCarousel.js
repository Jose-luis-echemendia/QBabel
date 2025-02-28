import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

export const useInfinityCarousel = ({
  fastSpeed = 100,
  slowSpeed = 160,
  direction = "left", // "left" o "right"
}) => {
  const [speed, setSpeed] = useState(fastSpeed);
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (width === 0) return;

    const startPosition = direction === "left" ? 0 : -width / 2;
    const endPosition = direction === "left" ? -width / 2 : 0;

    const controls = animate(xTranslation, [startPosition, endPosition], {
      ease: "linear",
      duration: speed, // Controla la velocidad de desplazamiento
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => controls.stop();
  }, [speed, width, direction]);

  const handleHoverStart = () => setSpeed(slowSpeed);
  const handleHoverEnd = () => setSpeed(fastSpeed);

  return {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
  };
};
