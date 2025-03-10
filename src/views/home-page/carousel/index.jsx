import { v4 as uuid } from "uuid";
import { Carousel } from "@material-tailwind/react";
import { customNavigation } from "./config";

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
      <Carousel
        className="!overflow-hidden rounded-xl h-[450px] -mt-4"
        loop={true}
        autoplay={true}
        autoplayDelay={5000}
        navigation={customNavigation}
      >
        {items.map((item) => (
          <figure key={uuid()} className="w-full h-96">
            <figcaption className="ml-1.5">
              <h3 className="text-black font-bold font-opensans text-lg leading-6">{item.title}</h3>
              <span className="text-gray-500">{item.sumary} </span>
            </figcaption>
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
