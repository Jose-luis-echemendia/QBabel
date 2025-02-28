import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion } from "framer-motion";
import { v4 as uuidi } from "uuid";
import { useInfinityCarousel } from "@/hooks/useInfinityCarousel";

export const Categories = () => {
  // Usa el custom hook para el primer carrusel (derecha a izquierda)
  const {
    ref: ref1,
    xTranslation: xTranslation1,
    handleHoverStart: handleHoverStart1,
    handleHoverEnd: handleHoverEnd1,
  } = useInfinityCarousel({ fastSpeed: 1, slowSpeed: 160, direction: "left" });

  // Usa el custom hook para el segundo carrusel (izquierda a derecha)
  const {
    ref: ref2,
    xTranslation: xTranslation2,
    handleHoverStart: handleHoverStart2,
    handleHoverEnd: handleHoverEnd2,
  } = useInfinityCarousel({ fastSpeed: 1, slowSpeed: 160, direction: "right" });

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
        onHoverStart={handleHoverStart1}
        onHoverEnd={handleHoverEnd1}
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
        onHoverStart={handleHoverStart2}
        onHoverEnd={handleHoverEnd2}
      >
        {[...schemaImagesCategoria, ...schemaImagesCategoria].map((item) => (
          <Card key={uuidi()} src={item.src} alt={item.alt} text={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};