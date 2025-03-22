import { booksData } from "@/constants/home-page/best-books";

export const BodyCategoryBooks = () => {
  return (
    <>
      <div className="gird grid-cols-2 w-full h-full py-3 px-5 ">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="relative flex flex-col items-center justify-center  bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-auto rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
