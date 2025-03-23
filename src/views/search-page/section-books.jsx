import { booksData } from "@/constants/home-page/best-books";

export const SectionBooks = () => {
  return (
    <>
      <div className="col-span-2 w-full h-full bg-red-200">dsf</div>
      <div className="col-span-8 grid grid-cols-2 w-full h-full py-3 px-8 gap-9 mt-5">
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

            {/* free or discounted */}
            {book.isFree || book.isDiscounted ? (
              <div className="absolute top-5 right-6">
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-14 text-primary"
                >
                  <path
                    d="M13.5 0L15.6028 4.12816L19.3574 1.28741L19.392 5.88533L24.0547 4.89463L22.0142 9.05166L26.6615 10.1072L22.95 13L26.6615 15.8928L22.0142 16.9483L24.0547 21.1054L19.392 20.1147L19.3574 24.7126L15.6028 21.8718L13.5 26L11.3972 21.8718L7.64257 24.7126L7.60802 20.1147L2.94528 21.1054L4.98584 16.9483L0.338473 15.8928L4.05 13L0.338473 10.1072L4.98584 9.05166L2.94528 4.89463L7.60802 5.88533L7.64257 1.28741L11.3972 4.12816L13.5 0Z"
                    fill="#EAD38D"
                  />
                </svg>
                <div className="flex items-center justify-center absolute top-[18px] left-2.5 text-black-500 font-bold text-sm">
                  {book.isFree && <span>Gratis</span>}
                  {book.isDiscounted && <span> -{book.discount} </span>}
                </div>
              </div>
            ) : null}

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
              <div className="flex gap-10 mt-3 ml-3 justify-center items-center">
                <div className="flex flex-col gap-1 items-center justify-center">
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
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <small>Lecturas</small>
                  </span>
                  <span className="text-sm font-bold">{book.reads}</span>
                </div>
                <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
                <div className="flex flex-col gap-1 items-center justify-center">
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
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                    <small>Votos</small>
                  </span>
                  <span className="text-sm font-bold">{book.reviews}</span>
                </div>
                <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
                <div className="flex flex-col gap-1 items-center justify-center">
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
              </div>

              <p className="text-sm text-start text-gray-800 pr-5 line-clamp-3">
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
