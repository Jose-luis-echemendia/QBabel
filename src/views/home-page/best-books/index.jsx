import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";
import { BookCover } from "./book-cover";

export const BestBooks = () => {
  const { booksData, transitionBookData, currentBookData } = useCarousel();

  return (
    <section className="relative grid grid-cols-10 gap-3 overflow-hidden pb-10">
      <AnimatePresence mode="wait">
        {/* background */}
        <motion.div
          key={transitionBookData.color} // Usa un valor único que cambia con currentBookData
          className="absolute top-0 left-0 w-full h-full z-0"
          style={{ background: `linear-gradient(to right, #111217, ${transitionBookData.color})` }}
          variants={{
            initial: { x: "-100%" },
            animate: { x: "0%" },
            exit: { x: "100%" },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Image book*/}
        <div className="col-span-4 py-10 z-10 relative">
          <BookCover
            transitionBookData={transitionBookData}
            currentBookData={currentBookData}
          />
        </div>

        <div className="col-span-6 p-4 pt-10 ml-10 flex flex-col gap-14 z-10 relative">
          {/* Información book*/}
          <DescriptionBook
            bookData={transitionBookData ? transitionBookData : currentBookData}
          />

          {/* caruesol books */}
          <CarouselBooks booksData={booksData} />
        </div>
      </AnimatePresence>
    </section>
  );
};
