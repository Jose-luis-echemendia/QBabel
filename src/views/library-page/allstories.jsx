// AllStories.jsx
import PropTypes from "prop-types";
import { CardBook } from "../particular-components/books/card-book";

function AllStories({ books }) {
  return (
    <section className="py-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}

AllStories.propTypes = {
  books: PropTypes.arrayOf(
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

export default AllStories;
