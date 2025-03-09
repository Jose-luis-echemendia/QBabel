import { v4 as uuid } from "uuid";
import { Carousel } from "@material-tailwind/react";
import { customNavigation } from "./config";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Pagination } from "swiper/modules";
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
        className="!overflow-hidden rounded-xl h-[400px]"
        loop={true}
        autoplay={true}
        autoplayDelay={5000}
        navigation={customNavigation}
      >
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

      <Swiper  loop={true} modules={[Pagination]} className="mySwiper">
        {items.map((item) => (
          <SwiperSlide key={uuid()}>
            <figure className="w-full h-96">
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
