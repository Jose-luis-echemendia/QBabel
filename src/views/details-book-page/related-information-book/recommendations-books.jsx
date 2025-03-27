import { Link } from "react-router-dom";

export const RecommendationsBooks = ({ books }) => {
  return (
    <>
      <div className="w-full h-full">
        <h3 className="text-2xl font-medium mb-2 lg:text-left text-center lg:mt-0 mt-3">Recomendaciones</h3>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-y-6 lg:px-0 px-5 place-items-center py-2">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex gap-1.5 w-full rounded-xl lg:h-56"
            >
              <figure className="lg:w-[1000px] w-[400px]">
                <Link to={`/books/${book.id}`} className="block w-full h-full">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-full w-full object-cover rounded-l-xl hover:lg:relative hover:absolute hover:top-0 hover:left-0 hover:bottom-0 hover:right-0"
                  />
                </Link>
              </figure>
              <div className="flex flex-col gap-2 pt-5 px-2 lg:w-[2500px] w-full">
                <h4 className="text-xl text-black font-opensans font-bold line-clamp-1">
                  {book.tittle}
                </h4>
                <span className="text-sm">
                  <strong>Por: </strong> {book.author.name}{" "}
                </span>
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
                  {book.categories.slice(0, 4).map((category) => (
                    <span
                      key={category.id}
                      className="px-1.5 py-1 rounded-2xl bg-gray-200 text-black font-semibold text-xs"
                    >
                      {category.name}
                    </span>
                  ))}
                  {book.categories.length > 4 && <span className="text-gray-800 text-xs flex items-center ml-1.5">+{book.categories.length - 4} más</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
