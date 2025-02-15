import { useState } from "react";
import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion } from "framer-motion";

const Categoria = () => {
  const [speed, setSpeed] = useState(30); // Velocidad normal
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

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

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (


    <div className="w-full overflow-hidden relative">
      <h1 className="text-center py-3 mt-10 text-[45px] font-quicksand font-bold">
        Categoria 
      </h1>

      <motion.div
        className="flex gap-6 flex-nowrap min-w-max hover:cursor-pointer"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }} // Se mueve completamente
        transition={{
          ease: "linear",
          duration: speed, // Cambia la velocidad sin reiniciar
          repeat: Infinity,
        }}
        onHoverStart={() => setSpeed(50)} // Hace el scroll más lento
        onHoverEnd={() => setSpeed(30)} // Vuelve a la velocidad normal
        
      >
        {/* Duplicamos los elementos para que el scroll sea continuo */}
        {[...schemaImagesCategoria, ...schemaImagesCategoria].map((item, index) => (
          <Card key={index} src={item.src} alt={item.alt} text={item.alt} />
        ))}
      </motion.div>
    </div>
  );
};

export default Categoria;
