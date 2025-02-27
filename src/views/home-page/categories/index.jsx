import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion,  } from "framer-motion";
import { v4 as uuidi } from "uuid";

export const Categories = () => {
  const {
    ref: ref1,
    xTranslation: xTranslation1,
    handleHoverStart: handleHoverStart1,
    handleHoverEnd: handleHoverEnd1,
  } = useInfiniteScroll({ fastSpeed: 100, slowSpeed: 160 });

  // Usa el custom hook para el segundo carrusel (izquierda a derecha)
  const {
    ref: ref2,
    xTranslation: xTranslation2,
    handleHoverStart: handleHoverStart2,
    handleHoverEnd: handleHoverEnd2,
  } = useInfiniteScroll({ fastSpeed: 100, slowSpeed: 160 });

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
