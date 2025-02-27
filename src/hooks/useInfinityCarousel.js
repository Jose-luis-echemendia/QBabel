import { useState, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";

export const useInfinityCarousel = ({
  fastSpeed = 100,
  slowSpeed = 160,
  direction = "left", // "left" o "right"
}) => {
  const [duration, setDuration] = useState(fastSpeed);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    const finalPosition =
      direction === "left" ? -width / 2 - 8 : width / 2 + 8; // Posición final según la dirección

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
      const startPosition = direction === "left" ? 0 : -finalPosition;
      const endPosition = direction === "left" ? finalPosition : 0;

      controls = animate(xTranslation, [startPosition, endPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop?.();
  }, [rerender, xTranslation, duration, width, direction]);

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