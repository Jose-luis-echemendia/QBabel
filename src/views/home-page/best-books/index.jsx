import { DescriptionBook } from "./description-book";

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


