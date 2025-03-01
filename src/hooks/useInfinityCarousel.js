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
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [controls, setControls] = useState(null);

  useEffect(() => {
    if (width === 0) return;

    const startPosition = direction === "left" ? 0 : -width / 2;
    const endPosition = direction === "left" ? -width / 2 : 0;

    let newControls;

    if (mustFinish) {
      // Si debe terminar, animar hasta el final y luego reiniciar
      newControls = animate(xTranslation, [xTranslation.get(), endPosition], {
        ease: "linear",
        duration: speed * (Math.abs(endPosition - xTranslation.get()) / (width / 2)),
        onComplete: () => {
          setMustFinish(false);
          xTranslation.set(startPosition); // Reiniciar la posición
          newControls = animate(xTranslation, [startPosition, endPosition], {
            ease: "linear",
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0,
          });
          setControls(newControls);
        },
      });
    } else {
      // Animación normal
      newControls = animate(xTranslation, [startPosition, endPosition], {
        ease: "linear",
        duration: speed,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
      setControls(newControls);
    }

    return () => {
      if (newControls) newControls.stop();
    };
  }, [speed, width, direction, mustFinish]);

  const handleHoverStart = () => {
    if (speed !== SLOWSPEED) {
      setMustFinish(true);
      setSpeed(SLOWSPEED);
    }
  };

  const handleHoverEnd = () => {
    if (speed !== FASTSPEED) {
      setMustFinish(true);
      setSpeed(FASTSPEED);
    }
  };

  return {
    ref,
    xTranslation,
    handleHoverStart,
    handleHoverEnd,
  };
};