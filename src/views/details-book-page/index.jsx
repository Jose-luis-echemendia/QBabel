import { CustomBodyBook } from "./body-book";
import { CustomFooterBook } from "./footer-book";
import { CustomHeaderBook } from "./header-book";
import { RelatedInformationBook } from "./related-information-book";

const DetailsBookView = () => {
  const book = {
    id: 5,
    author: "Antoine De Saint-Exupéry",
    tittle: "El Principito",
    img: "/assets/images/home/best_books/book5.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus.",
    color: "#A5A5A6",
    reviews: "41k",
    reads: "7.6M",
    parts: 71,
    category: "category",
    isComplete: true,
    isFree: false,
    author: {
      id: 1,
      avatar: "/assets/images/avatar.jpeg",
      name: "jose luis",
    },
    license: "© All Rights Reserved",
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
    chapters: [
      {
        id: 1,
        name: "Capítulo 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 2,
        name: "Capítulo 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
      {
        id: 3,
        name: "Capítulo 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quidem perferendis ab doloribus ipsam ratione fugit officia, rem necessitatibus.",
      },
    ],
  };

  return (
    <>
      <article className="min-h-screen w-full h-full py-5 mx-0">
        <CustomHeaderBook book={book} />
        <div className="grid grid-cols-6 gap-10 container mx-auto px-20">
          <div className="col-span-4 flex flex-col gap-10">
            <CustomBodyBook book={book} />
            <CustomFooterBook book={book} />
          </div>
          <div className="col-span-2">
            <RelatedInformationBook />
          </div>
        </div>
      </article>
    </>
  );
};

export default DetailsBookView;
