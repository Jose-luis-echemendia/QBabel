import { DescriptionBook } from "./description-book";
import { motion } from "framer-motion";


const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { stiffness: 1000, velocity: -100 } },
}

export const BestBooks = () => {
  return (
    <div className="flex flex-row gap-3 bg-[#111217] ">
      {/* Imagen */}
      <figure className="flex-1">
        <img
          src="/assets/images/home/best_books/book1.png"
          alt=""
          className="w-full h-screen object-contain"
        />
      </figure>
      {/* Información */}
      <DescriptionBook />
    </div>
  );
};


