import { CustomBodyBook } from "./body-book";
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
    author: {
      id: 1,
      avatar: "/assets/images/avatar.jpeg",
      name: "jose luis"
    },
    license: "© All Rights Reserved",
    categories: {
      id
    }
  };

  return (
    <>
      <article className="min-h-screen w-full h-full py-5 mx-0">
        <CustomHeaderBook book={book}/>
        <div className="grid grid-cols-6 gap-10 container mx-auto px-20">
          <CustomBodyBook book={book}/>
          <RelatedInformationBook />
        </div>
        <footer></footer>
      </article>
    </>
  );
};

export default DetailsBookView;
