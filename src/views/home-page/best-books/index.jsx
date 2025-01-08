import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";
import { BookCover } from "./book-cover";

export const BestBooks = () => {
  const { booksData, transitionBookData, currentBookData } = useCarousel();

  return (
    <motion.section
      key={currentBookData.img}
      initial={{ background: "#111217" }}
      animate={{
        background: `linear-gradient(to right, #111217, ${currentBookData.color})`,
      }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-10 gap-3 overflow-hidden pb-16"
    >
      <AnimatePresence>
        {/* Imagen book*/}
        <div className="col-span-4 py-10">
          <BookCover
            transitionBookData={transitionBookData}
            currentBookData={currentBookData}
          />
        </div>

        <div className="col-span-6 p-4 pt-10 ml-10 flex flex-col gap-14">
          {/* Información book*/}
          <DescriptionBook
            bookData={transitionBookData ? transitionBookData : currentBookData}
          />

          {/* caruesol books */}
          <CarouselBooks booksData={booksData} />
        </div>
      </AnimatePresence>
    </motion.section>
  );
};
