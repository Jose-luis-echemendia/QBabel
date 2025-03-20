import { bestBooksData } from "@/constants/home-page/best-books";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

export const RelatedInformationBook = () => {
  return (
    <>
      <div className="py-10 mt-10">
        <div className="flex flex-col gap-5 justify-start items-start -mt-10 shadow-2xl shadow-gray-400 py-4 px-6 rounded-2xl">
          <span className="font-semibold text-xl pt-4">
            También te puede interesar
          </span>
          {bestBooksData.map((book) => (
            <Link
              key={uuid()}
              to={`/books/${book.id}`}
              className="block w-full h-full"
            >
              <div className="flex gap-3 w-full h-40">
                <img
                  src={book.img}
                  alt={book.tittle}
                  className="w-40 h-full object-contain rounded-xl"
                />
                <div className="flex flex-col justify-between w-[90%] py-1.5">
                  <h6 className="font-medium text-lg">{book.tittle}</h6>
                  <div className="flex gap-1 items-center -my-2">
                    <span className="flex gap-1.5 text-gray-800">
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
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                      </svg>

                      <small>Capítulos</small>
                    </span>
                    <span className="text-sm font-bold">{book.parts}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {book.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
