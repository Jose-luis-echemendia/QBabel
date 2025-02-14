import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuid } from 'uuid';
import { schemaCarrusel } from './schema/schema-images';

// Import Swiper styles
  2

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carrusel() {

  const slides = schemaCarrusel.map((item) => ({
    id: item.id || uuid(),
    src: item.src,
    alt: item.alt || 'Imagen del carrusel',
  }));

  return (
    <Swiper
      effect={'coverflow'}
      direction="horizontal"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="h-[400px] w-[200px] "
    >
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id} className="rounded-lg mx-auto w-[200px] h-[200px]">
        <img src={src} alt={alt} className="w-[200px] h-[450px] rounded-lg" />
      </SwiperSlide>
      
      ))}
    </Swiper>
  );
}
