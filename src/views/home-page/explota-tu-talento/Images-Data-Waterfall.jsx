import { WaterfallBooks } from './waterfall-books';

const imagesData = [
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (7).png',
    alt: 'Motivación Diaria - Imagen de Fondo',
    className: 'bottom-10 -left-8 z-10 w-[285px] h-[284px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (10).png',
    alt: 'Motivación Diaria - Imagen Central',
    className: 'z-30 bottom-10 left-[45px] w-[195px] h-[176px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (16).png',
    alt: 'Motivación Diaria - Imagen Superior',
    className: 'z-50 bottom-8 -left-20 w-[150px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (5).png',
    alt: 'Motivación Diaria - Imagen Inferior Izquierda',
    className: 'z-40 bottom-2 left-0 w-[170px]  h-[160px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (3).png',
    alt: 'Imagen de un libro',
    className: '-bottom-8 -left-5 z-[35] w-[200px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (8).png',
    alt: 'Imagen de un libro',
    className: '-bottom-52 -left-5 z-[55] w-[300] h-[280px]',
  },
];

export const ImagesDataWaterfallBook = () => {
  return (
    <section aria-labelledby="waterfall-images" className="right-">
      <WaterfallBooks images={imagesData} />
    </section>
  );
};
