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
      <Carousel className="rounded-xl">
        {items.map((item) => (
          <figure key={uuid()} className="p-4 w-full h-96">
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </Carousel>
      <Carousel className="rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </>
  );
};
