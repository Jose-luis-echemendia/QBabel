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
    >
      {bookGroups.map((group, index) => (
        <BookGroup key={index} books={group} itemHeight={itemHeight} />
      ))}
    </Carousel>
  );
};
