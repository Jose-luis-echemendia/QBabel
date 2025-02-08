import { useState } from "react";
import { motion } from "framer-motion";

export const Opinions = () => {
  const [currentLeftPage, setCurrentLeftPage] = useState(0);
  const [currentRigthPage, setCurrentRigthtPage] = useState(1);
  
  const [rigthPage, setRigthtPage] = useState(0);
  const [leftPage, setLeftPage] = useState(0);
  
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
    "Página 7 - Fin del libro",
    "Página 8 - Fin del libro",
    "Página 9 - Fin del libro",
    "Página 10 - Fin del libro",
    "Página 11 - Fin del libro",
    "Página 12 - Fin del libro",
  ];


  const handleNextPage = () => {
    if (currentRigthPage < pages.length && !isAnimating) {
      setIsAnimating(true);
      setAnimateRightPage(true);
      setCurrentRigthtPage((prev) => prev + 2)
      setRigthtPage(currentRigthPage)
    }
  };

  const handlePrevPage = () => {
    if (currentRigthPage > 1 && !isAnimating) {
      setIsAnimating(true);
      setAnimateLeftPage(true);
      setCurrentLeftPage((prev) => prev - 2)
      setLeftPage(currentLeftPage)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-14 pb-20"> {/*  bg-[#644844] bg-opacity-40*/}
      <h2 className="mx-auto w-fit font-quicksand my-1 pb-12 font-bold text-[64px] text-black">
        Opiniones
      </h2>

      {/* Contenedor del libro */}
      <div
        className="relative w-[650px] h-[450px]"
        style={{ perspective: "1000px" }}
      >
        <div className="h-full w-full absolute z-[-1] bg-[#644844] scale-110 shadow-xl rounded-md" />

        {/* Página derecha */}
        <div className="absolute w-1/2 h-full bg-gray-100 right-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentRigthPage] || "Vacío"}
          </p>
        </div>

        {/* Página izquierda */}
        <div className="absolute w-1/2 h-full bg-gray-100 left-0 shadow-md rounded-lg flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentLeftPage] || "Vacío"}
          </p>
        </div>

        {/* Página izquierda animada */}
        {animateLeftPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 left-0 shadow-md rounded-lg flex items-center justify-center"
            style={{ transformOrigin: "right top" }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY >= 90 ? -1 : 1);
              if (latest.rotateY >= 90) {
                setLeftPage(currentRigthPage - 2)
              }
            }}
            onAnimationComplete={() => {
              setAnimateLeftPage(false);
              setIsAnimating(false); 
              setCurrentRigthtPage((prev) => prev - 2)
            }}
          >
            <p
              className="text-center text-lg font-semibold text-gray-700 px-4"
              style={{ transform: `scaleX(${flipProgress})` }}
            >
              {pages[leftPage] || "Vacío"}
            </p>
          </motion.div>
        )}

        {/* Página derecha animada */}
        {animateRightPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 right-0 shadow-md rounded-lg flex items-center justify-center"
            style={{ transformOrigin: "left top" }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY <= -90 ? -1 : 1);
              if (latest.rotateY <= -90) {
                setRigthtPage(currentLeftPage + 2)
              }
            }}
            onAnimationComplete={() => {
              setAnimateRightPage(false);
              setIsAnimating(false); // Permite nuevos clics
              setCurrentLeftPage((prev) => prev + 2)
            }}
          >
            <p
              className="text-center text-lg font-semibold text-gray-700 px-4"
              style={{ transform: `scaleX(${flipProgress})` }}
            >
              {pages[rigthPage] || "Vacío"}
            </p>
          </motion.div>
        )}
      </div>

      {/* Botones de navegación */}
      <div className="mt-16 flex gap-4 ">
        <button
          onClick={handlePrevPage}
          disabled={currentRigthPage === 1 || isAnimating}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentRigthPage >= pages.length - 2 || isAnimating}
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
