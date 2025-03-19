import { CustomHeaderBook } from "./header-book";

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
  };

  return (
    <>
      <article className="max-h-screen w-full h-full py-5 mx-0">
        <CustomHeaderBook book={book}/>
        <div>

        </div>
        <footer></footer>
      </article>
    </>
  );
};

export default DetailsBookView;
