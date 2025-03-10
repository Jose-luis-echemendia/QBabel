import PropTypes from "prop-types";

export const BookGroup = ({ books, itemHeight }) => (
  <div className="flex items-center justify-center gap-2 px-5">
    {books.map((book) => (
      <figure key={book.id} className={`w-1/4 ${itemHeight}`}>
        <img
          src={book.img}
          alt={book.title}
          className="h-full w-full object-cover rounded-xl"
        />
      </figure>
    ))}
  </div>
);

export const BookGroupCard = ({ books, itemHeight }) => (
  <div className={`flex items-center justify-center gap-2`}>
    {books.map((book) => (
      <div
        key={book.id}
        className={`${itemHeight} bg-gray-100 flex gap-2  w-1/2 `}
      >
        <figure className="">
          <img
            src={book.img}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-2 pt-3">
          <h4> {book.tittle} </h4>
          <p className="text-sm"> {book.description} </p>
          <span>reviews</span>
        </div>
      </div>
    ))}
  </div>
);

BookGroupCard.propTypes = BookGroup.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  itemHeight: PropTypes.string.isRequired,
};
