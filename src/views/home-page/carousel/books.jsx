import { bestBooksData } from "@/constants/home-page/best-books";
import { v4 as uuid } from "uuid";
import { Carousel } from "@material-tailwind/react";

const data = [
  {
    code: (
      <div className="flex items-center justify-center gap-4">
        {[...bestBooksData].map((book) => (
          <figure key={uuid()} className="w-full h-56">
            <img
              src={book.img}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    ),
  },
  {
    code: (
      <div className="flex items-center justify-center gap-4">
        {[...bestBooksData].map((book) => (
          <figure key={uuid()} className="w-full h-56">
            <img
              src={book.img}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    ),
  },
  {
    code: (
      <div className="flex items-center justify-center gap-4">
        {[...bestBooksData].map((book) => (
          <figure key={uuid()} className="w-full h-56">
            <img
              src={book.img}
              alt={book.title}
              className="h-full w-full object-cover"
            />
          </figure>
        ))}
      </div>
    ),
  },
];

export const CustomCarouselBooks = () => {
  return (
    <>
      <Carousel className="rounded-xl h-56" autoplay={false}>
        {data.map((item) => (
          <>{item.code}</>
        ))}
      </Carousel>
    </>
  );
};
