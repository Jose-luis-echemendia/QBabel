import { WaterfallBooks } from './waterfall-books';

export const ImageDataPhone = () => {
  const imagesDataPhone = [
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (15).png',
      alt: 'Motivación Diaria - Imagen 1',
      className: 'absolute w-[220px] left-32 top-28 z-0',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (19).png',
      alt: 'Motivación Diaria - Imagen 2',
      className: 'absolute left-28 top-36 rotate-[18deg] w-[350px] z-30',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (18).png',
      alt: 'Motivación Diaria - Imagen 3',
      className: 'absolute left-32  w-[350px]  top-48 w-[280px] z-20',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (17).png',
      alt: 'Motivación Diaria - Imagen 4',
      className: 'absolute left-36 top-64 w-[340px] z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (11).png',
      alt: 'Motivación Diaria - Imagen 5',
      className: 'absolute right-44 w-[350px] top-32 z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (4) 1.png',
      alt: 'Motivación Diaria - Imagen 6',
      className: 'absolute right-40  w-[270px] bottom-0 z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (13).png',
      alt: 'Imagen de un libro',
      className: ' z-[55] top-14 ml-[2.5px] mt-10  h-[297px]',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (9).png',
      alt: 'Imagen de un libro',
      className: ' z-[5] top-36  ml-8 mt-56 w-[135px] h-[230px]',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (6).png',
      alt: 'Imagen de un libro',
      className: ' z-[60] top-36 -right-44   mt-64 w-[295px] h-[310px]',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (12).png',
      alt: 'Imagen de un libro',
      className: ' z-[60] top-60    mt-64 w-[275px] h-[310px]',
    },
  ];

  return (
    <section aria-labelledby="phone-images">
      <WaterfallBooks images={imagesDataPhone} />
    </section>
  );
};
