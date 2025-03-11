import PropTypes from "prop-types";

export const BookGroup = ({ books, itemHeight, boolsPerSlide }) => (
  <div className="flex items-center justify-center gap-2 px-5 pt-3">
    {books.map((book) => (
      <figure
        key={book.id}
        className={`w-1/4 ${itemHeight} flex flex-col gap-1`}
      >
        <img
          src={book.img}
          alt={book.title}
          className={
            boolsPerSlide < 8
              ? "h-72 w-full object-cover rounded-xl"
              : "h-56 w-40 object-cover rounded-xl"
          }
        />
        <span className="ml-2 bg-gray-200 w-fit p-0.5 px-2 mt-1 rounded-xl font-opensans text-black text-sm font-semibold">
          {book.category}
        </span>
        <span className="ml-3 flex gap-1.5 text-gray-800 mt-1 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          {book.reviews}
        </span>
      </figure>
    ))}
  </div>
);

export const BookGroupCard = ({ books, itemHeight }) => (
  <div className={`flex justify-center gap-3 px-6 mt-5`}>
    {books.map((book) => (
      <div
        key={book.id}
        className={`${itemHeight} bg-gray-100 flex gap-2  w-1/2 rounded-xl`}
      >
        <figure className="w-[800px]">
          <img
            src={book.img}
            alt={book.title}
            className="h-full w-full object-cover rounded-l-xl"
          />
        </figure>
        <div className="flex flex-col gap-2 pt-5 px-2">
          <h4 className="text-xl text-black font-opensans font-bold">
            {book.tittle}
          </h4>
          <p className="text-sm text-start text-gray-800 pr-5">
            {book.description}
          </p>
          <span className="flex gap-1.5 -mt-1 text-gray-800 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {book.reviews}
          </span>
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
