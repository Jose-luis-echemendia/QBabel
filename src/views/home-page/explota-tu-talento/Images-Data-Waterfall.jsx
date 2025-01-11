import { WaterfallBooks } from './waterfall-books';

const imagesData = [
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (7).png',
    alt: 'Motivación Diaria - Imagen de Fondo',
    className: 'bottom-10 -left-8 z-10 w-[320px] h-[294px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (10).png',
    alt: 'Motivación Diaria - Imagen Central',
    className: 'z-30 bottom-10 left-[45px] w-[235px] h-[196px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (16).png',
    alt: 'Motivación Diaria - Imagen Superior',
    className: 'z-50 bottom-8 -left-24 w-[200px]',
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
    className: '-bottom-56 -left-5 z-[55] h-[300px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (12).png',
    alt: 'Imagen de un libro',
    className: ' z-[70] -right-32 mt-16 w-[360px] h-[300px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (9).png',
    alt: 'Imagen de un libro',
    className: ' z-[5]  -right-8 -bottom-40  w-[240px] h-[320px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (6).png',
    alt: 'Imagen de un libro',
    className: ' z-[60] -bottom-72 -right-10   w-[400px] h-[380px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (13).png',
    alt: 'Imagen de un libro',
    className: ' z-[55] top-60 right-0  mt-10 w-[200px] h-[297px]',
  },
];

export const ImagesDataWaterfallBook = () => {
  return (
    <section aria-labelledby="waterfall-images">
      <WaterfallBooks images={imagesData} />
    </section>
  );
};
