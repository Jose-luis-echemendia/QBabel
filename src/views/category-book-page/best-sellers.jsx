import { CustomCarouselBooks } from "../home-page/carousel/books";

export const BestSellers = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col container mx-auto items-start justify-start gap-1">
        <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
          Top 10 libros más vendidos
        </span>
        <CustomCarouselBooks carouselSize={`h-80`} booksPerSlide={8} />
      </div>
    </>
  );
};
