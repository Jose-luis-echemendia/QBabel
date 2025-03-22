import { booksData } from "@/constants/home-page/best-books";

export const BodyCategoryBooks = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full py-3 px-8 gap-9 mt-5">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="relative flex items-center justify-center p-2.5 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200"
          >
            {/* Hear Banner */}
            <div className="absolute -top-5 -left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 text-black-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <span className="flex items-center justify-center absolute top-2 left-4 text-primary font-bold">{book.id} </span>
            </div>
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
