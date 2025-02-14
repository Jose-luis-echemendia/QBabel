import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

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
          delay: 1000, // Tiempo en milisegundos entre cada transición (por ejemplo, 5000 para 5 segundos)
          disableOnInteraction: false, // Desactivar autoplay cuando el usuario interactúa (arrastra o hace clic)
        }}
        className="mySwiper"
      >
        <SwiperSlide key={2}>
          <p>abc</p>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <p>abc</p>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <p>abc</p>
        </SwiperSlide>
        <SwiperSlide key={2}>
          <p>abc</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
