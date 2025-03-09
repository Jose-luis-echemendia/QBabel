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

// Tamaño del grupo (número de libros por slide)
const BOOKS_PER_SLIDE = 8;

// Componente para renderizar un grupo de libros

export const CustomCarouselBooks = ({
    carouselSize = ""
  }) => {
  // Dividir los libros en grupos
  const bookGroups = chunkArray(
    [...bestBooksData, ...bestBooksData, ...bestBooksData],
    BOOKS_PER_SLIDE
  );

  return (
    <Carousel className="rounded-xl h-64" autoplay={false}>
      {bookGroups.map((group, index) => (
        <BookGroup key={index} books={group} />
      ))}
    </Carousel>
  );
};
