import { v4 as uuid } from "uuid";
import { Carousel } from "@material-tailwind/react";

const items = [
  {
    title: "Título del libro",
    sumary: "pequeña descrioción de la historia o drama que trata el libro",
    src: "/assets/images/2.jpg",
  },
  {
    title: "Título del libro",
    sumary: "pequeña descrioción de la historia o drama que trata el libro",
    src: "/assets/images/3.jpg",
  },
  {
    title: "Título del libro",
    sumary: "pequeña descrioción de la historia o drama que trata el libro",
    src: "/assets/images/2.jpg",
  },
  {
    title: "Título del libro",
    sumary: "pequeña descrioción de la historia o drama que trata el libro",
    src: "/assets/images/3.jpg",
  },
];

export const CustomCarousel = () => {
  return (
    <>
      <Carousel className="rounded-xl" loop={true} autoplay={true} autoplayDelay={5000}>
      {items.map((item) => (
          <figure key={uuid()} className="w-full h-96">
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </Carousel>
    </>
  );
};