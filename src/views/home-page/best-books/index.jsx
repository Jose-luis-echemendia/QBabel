import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";
import { AnimatePresence } from "framer-motion";
import { useCarousel } from "@/hooks/useCarousel";

export const BestBooks = () => {

  const { booksData } = useCarousel()

  return (
    <section className="grid grid-cols-10 gap-3 bg-[#111217] overflow-hidden">
      <AnimatePresence>
        {/* Imagen book*/}
        <figure className="col-span-4">
          <img
            src="/assets/images/home/best_books/book1.png"
            alt=""
            className="w-full h-screen object-contain"
          />
        </figure>
        <div className="col-span-6 p-4 pt-10 ml-10 flex flex-col gap-14">
          {/* Información book*/}
          <DescriptionBook />

          {/* caruesol books */}
          <CarouselBooks booksData={booksData} />
        </div>
      </AnimatePresence>
    </section>
  );
};
