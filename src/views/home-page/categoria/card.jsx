import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Card = ({ src, alt, text }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      className="relative px-28 mt-10 py-6 rounded-2xl m-10 shadow-lg overflow-hidden border-2 border-gray-400"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <p className="text-black mr-16 font-quicksand font-normal text-[30px]">
        {text}
      </p>
      <div className="absolute right-0 px-1 top-2 h-20">
        <img src={src} alt={alt} className="w-full h-full" />
      </div>

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
