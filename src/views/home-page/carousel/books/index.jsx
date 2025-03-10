import { bestBooksData } from "@/constants/home-page/best-books";
import { Carousel } from "@material-tailwind/react";
import { BookGroup } from "./carousel-items";
import { ThemeProvider } from "@material-tailwind/react";
import { NextArrow, PrevArrow, customTheme } from "../config";
import PropTypes from "prop-types";

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
  itemHeight = carouselSize === "h-64"
    ? "h-56"
    : carouselSize === "h-80"
    ? "h-68"
    : carouselSize === "h-96"
    ? "h-76"
    : "h-56",
  boolsPerSlide = 8,
  CarouselItemComponent = BookGroup
}) => {
  // Dividir los libros en grupos
  const bookGroups = chunkArray(
    [...bestBooksData, ...bestBooksData, ...bestBooksData],
    boolsPerSlide
  );

  return (
    <ThemeProvider value={customTheme}>
      <Carousel
        className={`rounded-xl bg-red-200 ${carouselSize} ${carouselWidth}`}
        autoplay={false}
        PrevArrow={() => <PrevArrow />} 
        NextArrow={() => <NextArrow />} 
      >
        {bookGroups.map((group, index) => (
          <CarouselItemComponent key={index} books={group} itemHeight={itemHeight} boolsPerSlide={boolsPerSlide} />
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

// Validación de props
CustomCarouselBooks.propTypes = {
  carouselSize: PropTypes.oneOf(["h-64", "h-80", "h-96"]),
  carouselWidth: PropTypes.string,
  itemHeight: PropTypes.string,
  boolsPerSlide: PropTypes.number,
};
