import { CustomCarouselBooks } from "../home-page/carousel/books";
import { useAppSelector } from "@/hooks/redux/useStore";
import { LoadingCardBook } from "../loading/card-book";

export const BestSellers = () => {
  const books = useAppSelector(
    (state) => state.book.topSellerBooksFromCategory
  );
  const loading = useAppSelector((state) => state.book.loading);

  return (
    <>
      <div className="w-full h-full flex flex-col container mx-auto gap-1 mb-20 ">
        <span className="ml-7 text-black font-bold font-opensans text-lg leading-8">
          Top 8 más vendidos
        </span>
        <div className="relative h-[260px]">
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              !loading && books
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <LoadingCardBook />
          </div>
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              !loading && books
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            {books && (
              <CustomCarouselBooks
                books={books}
                carouselSize={`h-80`}
                booksPerSlide={8}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
