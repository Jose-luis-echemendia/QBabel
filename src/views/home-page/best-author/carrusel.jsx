import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import { schemaCarrusel } from "./schema/schema-images";

export const Carrusel = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 5000, // Tiempo en milisegundos entre cada transición (por ejemplo, 5000 para 5 segundos)
          disableOnInteraction: false, // Desactivar autoplay cuando el usuario interactúa (arrastra o hace clic)
        }}
        className="mySwiper"
      >
        {schemaCarrusel.map((image) => (
          <SwiperSlide key={uuid()}>
            <figure className="">
              <img src={image.src} alt={image.alt} />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
