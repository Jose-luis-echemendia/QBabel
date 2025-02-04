import { useState } from "react";
import { motion } from "framer-motion";

export const Opinions = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animateRightPage, setAnimateRightPage] = useState(false);
  const [animateLeftPage, setAnimateLeftPage] = useState(false);
  const [flipProgress, setFlipProgress] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false); // Bloquea múltiples clics

  const pages = [
    "Página 1 - Introducción",
    "Página 2 - Conceptos básicos",
    "Página 3 - Animaciones con Framer Motion",
    "Página 4 - TailwindCSS en acción",
    "Página 5 - Gracias por leer",
    "Página 6 - Fin del libro",
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 2 && !isAnimating) {
      setIsAnimating(true);
      setAnimateRightPage(true);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setAnimateLeftPage(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      {/* Contenedor del libro */}
      <div
        className="relative w-[600px] h-[400px]"
        style={{ perspective: "1000px" }}
      >
        {/* Página izquierda */}
        <div className="absolute w-1/2 h-full bg-gray-100 right-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentPage] || "Vacío"}
          </p>
        </div>

        <div className="absolute w-1/2 h-full bg-gray-100 left-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentPage + 1] || "Vacío"}
          </p>
        </div>

        {/* Página izquierda animada */}
        {animateLeftPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 left-0 shadow-md rounded-lg flex items-center justify-center"
            style={{ transformOrigin: "right top" }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY >= 90 ? -1 : 1);
            }}
            onAnimationComplete={() => {
              setAnimateLeftPage(false);
              setCurrentPage((prev) => Math.max(0, prev - 2)); // Retrocede dos páginas
              setIsAnimating(false); // Permite nuevos clics
            }}
          >
            <p
              className="text-center text-lg font-semibold text-gray-700 px-4"
              style={{ transform: `scaleX(${flipProgress})` }}
            >
              {pages[currentPage] || "Vacío"}
            </p>
          </motion.div>
        )}

        {/* Página derecha animada */}
        {animateRightPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 right-0 shadow-md rounded-lg flex items-center justify-center"
            style={{ transformOrigin: "left top" }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY <= -90 ? -1 : 1);
            }}
            onAnimationComplete={() => {
              setAnimateRightPage(false);
              setCurrentPage((prev) => Math.min(pages.length - 2, prev + 2)); // Avanza dos páginas
              setIsAnimating(false); // Permite nuevos clics
            }}
          >
            <p
              className="text-center text-lg font-semibold text-gray-700 px-4"
              style={{ transform: `scaleX(${flipProgress})` }}
            >
              {pages[currentPage + 1] || "Vacío"}
            </p>
          </motion.div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0 || isAnimating}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= pages.length - 2 || isAnimating}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
