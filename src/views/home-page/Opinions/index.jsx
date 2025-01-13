import { useState } from "react";
import { motion } from "framer-motion";

export const Opinions = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    "Página 1 - Introducción",
    "Página 2 - Conceptos básicos",
    "Página 3 - Animaciones con Framer Motion",
    "Página 4 - TailwindCSS en acción",
    "Página 5 - Gracias por leer",
    "Página 6 - Fin del libro",
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 2) {
      setCurrentPage((prev) => prev + 2); // Avanzamos dos páginas
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 2); // Retrocedemos dos páginas
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-purple-300">
      {/* Contenedor del libro */}
      <div className="relative w-[600px] h-[400px] perspective">
        {/* Página izquierda */}

        <div className="absolute w-1/2 h-full bg-gray-100 left-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentPage] || "Vacío"}
          </p>
        </div>
        <div className="absolute w-1/2 h-full bg-gray-100 right-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentPage] || "Vacío"}
          </p>
        </div>

        <motion.div
          key={currentPage}
          style={{
            transformOrigin: "left center",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)", // Página trasera inicial
          }}
          animate={{
            rotateY: currentPage % 2 === 0 ? 180 : 0, // Rotación sincronizada
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute w-1/2 h-full bg-white left-0 shadow-md rounded-lg flex items-center justify-center"
        ></motion.div>

        {/* Página derecha */}

        <motion.div
          key={currentPage}
          className="absolute w-1/2 h-full bg-gray-200 right-0 shadow-md rounded-lg flex items-center justify-center"
          style={{
            transformOrigin: "left center",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)", // Página trasera inicial
          }}
          animate={{
            rotateY: currentPage % 2 === 0 ? 180 : 0, // Rotación sincronizada
          }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentPage + 2] || "Vacío"}
          </p>
        </motion.div>
      </div>

      {/* Botones de navegación */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage >= pages.length - 2}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
