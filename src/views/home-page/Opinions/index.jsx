import { useState } from "react";
import { motion } from "framer-motion";

export const Opinions = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    { id: 1, content: "Página 1 - Bienvenido al Libro" },
    { id: 2, content: "Página 2 - Animaciones con Framer Motion" },
    { id: 3, content: "Página 3 - ¡Gracias por leer!" },
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-[300px] h-[400px] perspective">
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            className={`absolute w-full h-full bg-white shadow-md rounded-lg flex items-center justify-center ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
            initial={{ rotateY: index < currentPage ? -180 : 0 }}
            animate={{
              rotateY:
                index === currentPage ? 0 : index < currentPage ? -180 : 180,
              zIndex: index === currentPage ? 2 : 1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              transformOrigin: "left",
              backfaceVisibility: "hidden",
            }}
          >
            <p className="text-center text-lg font-semibold text-gray-700 px-4">
              {page.content}
            </p>
          </motion.div>
        ))}
      </div>

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
          disabled={currentPage === pages.length - 1}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
