import { CustomCarouselBooks } from "../home-page/carousel/books";

export const BestSellers = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-start justify-start gap-10">
        <h3 className="px-20 ml-5 font-semibold text-xl">
          Top 10 libros más vendidos
        </h3>
        <div className="flex flex-col gap-1 container mx-auto">
          <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
            Lo mejor de fantasía para ti
          </span>
          <CustomCarouselBooks carouselSize={`h-80`} booksPerSlide={8} />
        </div>
      </div>
    </>
  );
};
