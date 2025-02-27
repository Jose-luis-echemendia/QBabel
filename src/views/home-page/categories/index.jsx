import { useState, useEffect } from "react";
import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  const FAST_SPEED = 100;
  const SLOW_SPEED = 160;

  const [duration, setDuration] = useState(FAST_SPEED);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref1, { width: width1 }] = useMeasure();
  let [ref2, { width: width2 }] = useMeasure();

  const xTranslation1 = useMotionValue(0); // Animación de derecha a izquierda
  const xTranslation2 = useMotionValue(0); // Animación de izquierda a derecha

  useEffect(() => {
    let controls1, controls2;
    let finalPosition1 = -width1 / 2 - 8; // Posición final para el primer carrusel
    let finalPosition2 = width2 / 2 + 8; // Posición final para el segundo carrusel (invertido)

    if (mustFinish) {
      // Animación para el primer carrusel (derecha a izquierda)
      controls1 = animate(xTranslation1, [xTranslation1.get(), finalPosition1], {
        ease: "linear",
        duration: duration * (1 - xTranslation1.get() / finalPosition1),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });

      // Animación para el segundo carrusel (izquierda a derecha)
      controls2 = animate(xTranslation2, [xTranslation2.get(), finalPosition2], {
        ease: "linear",
        duration: duration * (1 - xTranslation2.get() / finalPosition2),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      // Animación infinita para el primer carrusel (derecha a izquierda)
      controls1 = animate(xTranslation1, [0, finalPosition1], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });

      // Animación infinita para el segundo carrusel (izquierda a derecha)
      controls2 = animate(xTranslation2, [-finalPosition2, 0], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return () => {
      controls1?.stop?.();
      controls2?.stop?.();
    };
  }, [rerender, xTranslation1, xTranslation2, duration, width1, width2]);

  return (
    <div className="w-full overflow-hidden relative">
      <h2 className="text-center py-3 mt-10 text-[45px] font-quicksand font-bold">
        ¿Sobre qué deseas leer...?
      </h2>

      {/* Primer carrusel (derecha a izquierda) */}
      <motion.div
        className="flex gap-6 flex-nowrap min-w-max hover:cursor-pointer mb-6"
        style={{ x: xTranslation1 }}
        ref={ref1}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_SPEED);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_SPEED);
        }}
      >
        {[...schemaImagesCategoria, ...schemaImagesCategoria].map((item) => (
          <Card key={uuidi()} src={item.src} alt={item.alt} text={item.alt} />
        ))}
      </motion.div>

      {/* Segundo carrusel (izquierda a derecha) */}
      <motion.div
        className="flex gap-6 flex-nowrap min-w-max hover:cursor-pointer"
        style={{ x: xTranslation2 }}
        ref={ref2}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_SPEED);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_SPEED);
        }}
      >
        {[...schemaImagesCategoria, ...schemaImagesCategoria].map((item) => (
          <Card key={uuidi()} src={item.src} alt={item.alt} text={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};
