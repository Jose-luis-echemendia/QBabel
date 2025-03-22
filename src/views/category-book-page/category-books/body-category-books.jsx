import { booksData } from "@/constants/home-page/best-books";

export const BodyCategoryBooks = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full py-3 px-8 gap-7 mt-5">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="relative flex items-center justify-center p-2.5 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <figure>
              <img
                src={book.img}
                alt={book.title}
                className="w-40 h-auto rounded-t-lg"
              />
            </figure>
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
