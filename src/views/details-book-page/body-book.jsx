import PropTypes from "prop-types";

export const CustomBodyBook = ({ book }) => {
  return (
    <>
      <div className="flex flex-col lg:justify-start lg:items-start items-center py-10 gap-6">
        <figure className="flex gap-5 justify-center items-center">
          <img
            src={book.author.avatar}
            alt={book.author.name}
            className="w-10 h-10 object-cover rounded-full"
          />
          <figcaption>{book.author.name}</figcaption>
        </figure>
        <div className="flex gap-2">
          {book.isFree ? (
            <div className="p-2 rounded-xl bg-green-800 -ml-[1px]">
              <span className="text-white-100 font-semibold">Gratuito!</span>
            </div>
          ) : (
            <div className="p-2 rounded-xl bg-gray-cam -ml-[1px]">
              <span className="text-white-100 font-semibold">De Pago</span>
            </div>
          )}

          {book.isComplete ? (
            <div className="p-2 rounded-xl bg-green-800 -ml-[1px]">
              <span className="text-white-100 font-semibold">Completada</span>
            </div>
          ) : (
            <div className="p-2 rounded-xl bg-gray-cam -ml-[1px]">
              <span className="text-white-100 font-semibold">En curso</span>
            </div>
          )}
        </div>
        <p className="text-gray-800 text-base text-start text-balance leading-7 font-normal lg:p-0 pl-4">
          {book.description}
          <br />
          <br />
          ***
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quas ipsa, vitae ipsum ipsam nihil consectetur non ratione eligendi.
          Quia minima deserunt dolorum earum. Harum itaque officia architecto
          libero veniam!
          <br />
          <br />
          Disponible en librerías de España y en ebook para el resto del mundo a
          partir del 17 de septiembre del 2020 💕. Pronto esperemos tener fecha
          de llegada en físico a otros países 😍.
        </p>
        <span>{book.license}</span>
        <div className="flex flex-wrap lg:gap-2 gap-4 lg:justify-normal justify-center">
          {book.categories.map((category) => (
            <span
              key={category.id}
              className="px-3 py-1.5 rounded-2xl bg-gray-200 text-black font-semibold"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

CustomBodyBook.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    isComplete: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    license: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
