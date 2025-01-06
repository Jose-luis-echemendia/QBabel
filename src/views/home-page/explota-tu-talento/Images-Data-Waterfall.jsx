import { WaterfallBooks } from './waterfall-books';

const imagesData = [
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (7) 1.png',
    alt: 'Imagen 1',
    className: 'bottom-10 z-10',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (10) 1.png',
    alt: 'Imagen 2',
    className: 'z-30 bottom-10 left-[55px]',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (16) 1.png',
    alt: 'Imagen 3',
    className: 'z-50 bottom-14',
  },
  {
    src: '/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (5) 1.png',
    alt: 'Imagen 4',
    className: 'z-40 bottom-8 left-4 w-[140px] h-[115px]',
  },
  {
    src: '/assets/images/home/explota_talento/book.png',
    alt: 'Imagen libro',
    className: 'bottom-0 z-[35] w-[180px] h-[150px]',
  },
];

export const ImagesDataWaterfallBook = () => {
  return (
    <div>
      <WaterfallBooks images={imagesData} />
    </div>
  );
};
