import { bestBooksData } from "@/constants/home-page/best-books";
import { Carousel } from "@material-tailwind/react";
import { BookGroup } from "./carousel-items";

// Función para dividir el array de libros en grupos (chunks)
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const nextArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const CustomCarouselBooks = ({
  carouselSize = "h-64",
  carouselWidth = "w-full",
  itemSize = "w-1/4",
  itemHeight = carouselSize === "h-64"
    ? "h-56"
    : carouselSize === "h-80"
    ? "h-68"
    : carouselSize === "h-96"
    ? "h-76"
    : "h-56",
  boolsPerSlide = 8,
}) => {
  // Dividir los libros en grupos
  const bookGroups = chunkArray(
    [...bestBooksData, ...bestBooksData, ...bestBooksData],
    boolsPerSlide
  );

  return (
    <Carousel
      className={`rounded-xl ${carouselSize} ${carouselWidth}`}
      autoplay={false}
      nextArrow={nextArrow}
    >
      {bookGroups.map((group, index) => (
        <BookGroup key={index} books={group} itemHeight={itemHeight} />
      ))}
    </Carousel>
  );
};
