import React, { useState } from "react";
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
    <section className="relative min-h-screen flex items-center justify-center p-5 overflow-hidden pt-6 pb-4">
     Opiniones
    </section>
  );
};
