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
      <div className="flex-1 p-4 pt-10 ml-10">
        {/* Información book*/}
        <DescriptionBook />

        {/* caruesol books */}
        <CarouselBooks />
      </div>
    </section>
  );
};
