import { booksData } from "@/constants/home-page/best-books";

export const BodyCategoryBooks = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full h-full py-3 px-8 gap-9 mt-5">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="relative flex items-center justify-center p-3 gap-1.5 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200"
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
              <span className="flex items-center justify-center absolute top-2 left-4 text-primary font-bold">
                {book.id}{" "}
              </span>
            </div>

            {/* Price */}
            <div className="absolute top-5 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-10 text-black-500"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <span className="flex items-center justify-center absolute top-2 left-4 text-primary font-bold">
                {book.id}{" "}
              </span>
            </div>

            <img
              src={book.img}
              alt={book.tittle}
              className="w-40 h-auto rounded-t-lg"
            />

            <div className="flex flex-col w-full h-full py-1.5 gap-1.5">
              <h3 className="text-xl w-[85%] text-gray-800 font-opensans font-bold line-clamp-1">
                {book.tittle}
              </h3>
              <div className="text-sm ">
                <strong>Por: </strong>{" "}
                <span className="text-gray-700"> {book.author}</span>
              </div>
              <div className="flex gap-4 mt-1">
                <span className="flex gap-1.5 -mt-1 text-gray-800 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {book.reviews}
                </span>
                <span className="flex gap-1.5 -mt-1 text-gray-800 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {book.reads}
                </span>
                <span className="flex gap-1.5 -mt-1 text-gray-800 text-xs">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {book.parts}
                </span>
              </div>
              <p className="text-sm text-start text-gray-800 pr-5 line-clamp-4">
                {book.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {book.categories.slice(0, 5).map((category) => (
                  <span
                    key={category.id}
                    className="px-1.5 py-1 rounded-2xl bg-gray-200 text-black font-semibold text-xs"
                  >
                    {category.name}
                  </span>
                ))}
                {book.categories.length > 4 && (
                  <span className="text-gray-800 text-xs flex items-center ml-1.5">
                    +{book.categories.length - 4} más
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
