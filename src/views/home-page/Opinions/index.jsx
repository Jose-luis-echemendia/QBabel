import { useState } from "react";
import { motion } from "framer-motion";
import { Opinion } from "./opinion";

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
    {
      srcImage: "/assets/images/home/opinions/1.png",
      opinion:
        "“La página es muy fácil de navegar Me encanta como puedo buscar mis libros favoritos.“",
      rating: 5,
    },
    {
      srcImage: "/assets/images/home/opinions/2.png",
      opinion:
        "“Me encanta la variedad de libros que ofrecen. Siempre encuentro algo nuevo para leer.”",
      rating: 4,
    },
    {
      srcImage: "/assets/images/home/opinions/1.png",
      opinion:
        "“La página es muy fácil de navegar Me encanta como puedo buscar mis libros favoritos.“",
      rating: 5,
    },
    {
      srcImage: "/assets/images/home/opinions/2.png",
      opinion:
        "“Me encanta la variedad de libros que ofrecen. Siempre encuentro algo nuevo para leer.”",
      rating: 4,
    },
    {
      srcImage: "/assets/images/home/opinions/1.png",
      opinion:
        "“La página es muy fácil de navegar Me encanta como puedo buscar mis libros favoritos.“",
      rating: 5,
    },
    {
      srcImage: "/assets/images/home/opinions/2.png",
      opinion:
        "“Me encanta la variedad de libros que ofrecen. Siempre encuentro algo nuevo para leer.”",
      rating: 4,
    },
    {
      srcImage: "/assets/images/home/opinions/1.png",
      opinion:
        "“La página es muy fácil de navegar Me encanta como puedo buscar mis libros favoritos.“",
      rating: 5,
    },
    {
      srcImage: "/assets/images/home/opinions/2.png",
      opinion:
        "“Me encanta la variedad de libros que ofrecen. Siempre encuentro algo nuevo para leer.”",
      rating: 4,
    },
  ];

  const handleNextPage = () => {
    if (currentRigthPage < pages.length && !isAnimating) {
      setIsAnimating(true);
      setAnimateRightPage(true);
      setCurrentRigthtPage((prev) => prev + 2);
      setRigthtPage(currentRigthPage);
    }
  };

  const handlePrevPage = () => {
    if (currentRigthPage > 1 && !isAnimating) {
      setIsAnimating(true);
      setAnimateLeftPage(true);
      setCurrentLeftPage((prev) => prev - 2);
      setLeftPage(currentLeftPage);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-14 pb-20 mt-6">
      {/*  bg-[#644844] bg-opacity-40*/}
      <h2 className="mx-auto w-fit font-quicksand my-1 mb-10 pb-12 font-bold text-[64px] text-black">
        Opiniones
      </h2>
      {/* Contenedor del libro */}
      <div
        className="relative w-[800px] h-[600px]"
        style={{ perspective: "1000px" }}
      >
        <div className="h-full w-full absolute z-[-1] bg-[#644844] scale-110 shadow-xl rounded-md" />

        {/* Página derecha */}
        <div className="absolute w-1/2 h-full bg-gray-100 right-0 shadow-md rounded-lg flex flex-col py-4">
          <Opinion data={pages[currentRigthPage]}/>
        </div>

        {/* Página izquierda */}
        <div className="absolute w-1/2 h-full bg-gray-100 left-0 shadow-md rounded-lg flex flex-col py-4">
          <Opinion src={pages[currentLeftPage].srcImage} />
          <p className="text-center text-lg font-semibold text-gray-700 px-4">
            {pages[currentLeftPage].opinion}
          </p>
        </div>

        {/* Página izquierda animada */}
        {animateLeftPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 left-0 shadow-md rounded-lg flex flex-col py-4"
            style={{ transformOrigin: "right top" }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY >= 90 ? -1 : 1);
              if (latest.rotateY >= 90) {
                setLeftPage(currentRigthPage - 2);
              }
            }}
            onAnimationComplete={() => {
              setAnimateLeftPage(false);
              setIsAnimating(false);
              setCurrentRigthtPage((prev) => prev - 2);
            }}
          >
            <div style={{ transform: `scaleX(${flipProgress})` }}>
              <Opinion src={pages[leftPage].srcImage} />
              <p className="text-center text-lg font-semibold text-gray-700 px-4">
                {pages[leftPage].opinion}
              </p>
            </div>
          </motion.div>
        )}

        {/* Página derecha animada */}
        {animateRightPage && (
          <motion.div
            className="absolute w-1/2 h-full bg-gray-200 right-0 shadow-md rounded-lg flex flex-col py-4"
            style={{ transformOrigin: "left top" }}
            animate={{ rotateY: -180 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            onUpdate={(latest) => {
              setFlipProgress(latest.rotateY <= -90 ? -1 : 1);
              if (latest.rotateY <= -90) {
                setRigthtPage(currentLeftPage + 2);
              }
            }}
            onAnimationComplete={() => {
              setAnimateRightPage(false);
              setIsAnimating(false); // Permite nuevos clics
              setCurrentLeftPage((prev) => prev + 2);
            }}
          >
            <div style={{ transform: `scaleX(${flipProgress})` }}>
              <Opinion src={pages[rigthPage].srcImage} />
              <p className="text-center text-lg font-semibold text-gray-700 px-4">
                {pages[rigthPage].opinion}
              </p>
            </div>
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
