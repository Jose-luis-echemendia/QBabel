import { useState } from "react";
import { schemaImagesCategoria } from "./images-categoria";
import { Card } from "./card";
import { motion } from "framer-motion";

const Categoria = () => {
  const [speed, setSpeed] = useState(30); // Velocidad normal

  return (
    <div className="w-full overflow-hidden relative">
      <h1 className="text-center py-3 mt-10 text-[45px] font-quicksand font-bold">
        Categoria 
      </h1>

      <motion.div
        className="flex gap-6 flex-nowrap min-w-max hover:cursor-pointer"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }} 
        transition={{
          ease: "linear",
          duration: speed, 
          repeat: Infinity,
        }}
        onHoverStart={() => setSpeed(50)} 
        onHoverEnd={() => setSpeed(30)} 
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
