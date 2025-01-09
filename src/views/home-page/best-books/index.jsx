import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";
import { BookCover } from "./book-cover";
import { Background } from "./background";
import { Controls } from "./controls";

export const BestBooks = () => {
  const { booksData, transitionBookData, currentBookData, handleNext, handlePrev } = useCarousel();

  return (
    <section className="relative min-h-screen grid grid-cols-10 gap-3 overflow-hidden pt-6 pb-4">
      {/* Fondo animado */}
      <AnimatePresence mode="wait">
        <Background
          transitionBookData={transitionBookData}
          currentBookData={currentBookData}
        />

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
          <Controls currentIndex={currentBookData.index} length={booksData.length} handleNext={handleNext} handlePrev={handlePrev} />
        </div>
      </AnimatePresence>
    </section>
  );
};
