import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";
import { BookCover } from "./book-cover";

export const BestBooks = () => {
  const { booksData, transitionBookData, currentBookData } = useCarousel();

  return (
    <section className="relative grid grid-cols-10 gap-3 overflow-hidden pb-10">
      {/* Fondo animado */}
      <AnimatePresence mode="wait">
        
      </AnimatePresence>

      {/* Contenido principal */}
      <div className="relative z-10 col-span-4 py-10">
        <BookCover
          transitionBookData={transitionBookData}
          currentBookData={currentBookData}
        />
      </div>

      <div className="relative z-10 col-span-6 p-4 pt-10 ml-10 flex flex-col gap-14">
        <DescriptionBook
          bookData={transitionBookData ? transitionBookData : currentBookData}
        />
        <CarouselBooks booksData={booksData} />
      </div>
    </section>
  );
};
