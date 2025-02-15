import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Card = ({ src, alt, text }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className="relative w-[300px] h-20 px-6 py-4 rounded-2xl mt-10 shadow-lg overflow-hidden border-2 border-gray-400 flex flex-col justify-between"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {/* Texto con tamaño controlado */}
      <p className="text-black text-center mr-10 my-auto font-quicksand font-normal text-[25px] truncate max-w-[250px]">
        {text}
      </p>

      {/* Imagen con tamaño fijo */}
      <div className="absolute right-2 top-2 w-16 h-16">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {/* Overlay animado */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="bg-white font-semibold text-lg px-4 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explorar</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
