import { CarouselBooks } from "./carousel-books";
import { DescriptionBook } from "./description-book";

export const BestBooks = () => {
  return (
    <section className="flex flex-row gap-3 bg-[#111217] ">
      {/* Imagen book*/}
      <figure className="flex-1">
        <img
          src="/assets/images/home/best_books/book1.png"
          alt=""
          className="w-full h-screen object-contain"
        />
      </figure>
      {/* Información book*/}
      <DescriptionBook />

      { /* caruesol books */ }
      <CarouselBooks />
    </section>
  );
};


