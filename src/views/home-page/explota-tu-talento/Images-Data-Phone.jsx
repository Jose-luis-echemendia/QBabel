import { WaterfallBooks } from './waterfall-books';

export const ImageDataPhone = () => {
  const imagesDataPhone = [
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (15) 1.png',
      alt: '',
      className: 'absolute left-32 top-32 z-0',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (19) 1.png',
      alt: '',
      className: 'absolute left-28 top-48 w-[350px] z-30',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (18) 1.png',
      alt: '',
      className: 'absolute left-32 object-cover top-64 w-[280px] z-20',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (17) 1.png',
      alt: '',
      className: 'absolute left-32 top-72 w-[340px] z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (11) 1.png',
      alt: '',
      className: 'absolute right-64 top-36 z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (4) 1.png',
      alt: '',
      className: 'absolute right-52 bottom-0 z-10',
    },
    {
      src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (13) 1.png',
      alt: '',
      className: 'absolute -right-56 w-[230px]  top-8 z-10',
    },
    {
      /*{
            src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (9) 1.png',
            alt: '',
            className: 'absolute -right-56  w-[220px]  -bottom-20 z-0',
          }, */
    },
  ];

  return (
    <div>
      <WaterfallBooks images={imagesDataPhone} />
    </div>
  );
};
