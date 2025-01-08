import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence, motion } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";
import { BookCover } from "./book-cover";

export const BestBooks = () => {
  const { booksData, transitionBookData, currentBookData } = useCarousel();

  return (
    <section className="grid grid-cols-10 gap-3 overflow-hidden">
      <AnimatePresence>
        {/* background */}
        <div  className="fixed top-0 bottom-0 right-full w-screen z-30 "/>
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
    </section>
  );
};

/**key={currentBookData.img}
      variants={{
        initial: {
          x: "100%",
          width: "100%",
        },
        animate: {
          x: "0%",
          width: "0%",
        },
        exit: {
          x: ["0%", "100%"],
          width: ["0%", "100%"],
        },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }} */