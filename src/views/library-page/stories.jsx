// AllStories.jsx
import PropTypes from "prop-types";
import { CardBook } from "../particular-components/books/card-book";

function Stories({
  items = null,
  mybooks = null,
  seeBuy = true,
  seeArchive = true,
}) {
  return (
    <section className="py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {items &&
            items.map((item) => (
              <CardBook
                key={item.uid}
                book={item.book_details}
                seeBuy={seeBuy}
                seeArchive={seeArchive}
              />
            ))}
          {mybooks &&
            mybooks.map((book) => (
              <CardBook key={book.uid} book={book} seeUpdateBook={true} mybook={true} />
            ))}
        </div>
      </div>
    </section>
  );
}

Stories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      tittle: PropTypes.string,
      img: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      reviews: PropTypes.string,
      category: PropTypes.string,
      parts: PropTypes.number,
    })
  ).isRequired,
};

export default Stories;
