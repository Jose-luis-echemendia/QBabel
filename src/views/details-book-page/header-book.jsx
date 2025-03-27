export const CustomHeaderBook = ({ book }) => {
  return (
    <>
      <header className="lg:w-full w-[400px] lg:h-[350px] h-full flex items-center justify-center border-b shadow-2xl lg:-mt-0 -mt-6">
        <figure className="flex lg:flex-row flex-col lg:gap-5 items-center justify-center w-full h-full">
          <img
            src={book.img}
            alt={book.tittle}
            className="object-cover rounded-xl shadow-xl lg:h-[300px] lg:p-0 lg:scale-100 scale-75 lg:w-[200px] lg:-mt-2.5"
          />
          <figcaption className="h-full py-12 flex flex-col lg:items-start items-center justify-between lg:-mt-0 -mt-16">
            <div className="lg:mb-0 mb-2">
              <h2 className="text-3xl font-bold w-full">{book.tittle}</h2>
              {book.isComplete && (
                <span className="text-3xl font-bold w-ful inline-flex -ml-[1px]">
                  (Completa
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  )
                </span>
              )}
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-y-0 mt-3 ml-3 justify-center items-center lg:mb-0 mb-4">
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
            <div className="flex flex-row items-center gap-1">
              <button className="flex gap-1.5 bg-primary py-3 px-5 rounded-l-full text-black-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span className="font-semibold">Comenzar a leer</span>
              </button>
              <button className="flex gap-1.5 bg-black-500 py-3 px-3 rounded-r-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <span className="font-semibold">Agregar</span>
              </button>
            </div>
          </figcaption>
        </figure>
      </header>
    </>
  );
};
