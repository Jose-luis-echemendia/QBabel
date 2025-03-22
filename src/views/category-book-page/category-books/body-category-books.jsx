import { booksData } from "@/constants/home-page/best-books";

export const BodyCategoryBooks = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full py-3 px-5 gap-10 mt-8">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="relative w-1/2 flex items-center justify-center gap-1.5 bg-white rounded-lg shadow-lg"
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
