const DetailsBookView = () => {
  const book = {
    id: 5,
    author: "Antoine De Saint-Exupéry",
    tittle: "El Principito",
    img: "/assets/images/home/best_books/book5.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus.",
    color: "#A5A5A6",
    reviews: "41k",
    reads: "7.6M",
    parts: 71,
    category: "category",
    is_complete: true,
  };

  return (
    <>
      <article className="max-h-screen w-full h-full py-5 mx-0">
        <header className="w-full h-[350px] flex items-center justify-center border-b shadow-2xl">
          <figure className="flex gap-5 items-center justify-center w-full h-full">
            <img
              src={book.img}
              alt={book.tittle}
              className="object-cover rounded-xl shadow-xl h-[300px] w-[200px] -mt-2.5"
            />
            <figcaption className="h-full py-12 flex flex-col items-start justify-between">
              <div>
                <h2 className="text-3xl font-bold w-full">{book.tittle}</h2>
                {book.is_complete && (
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
              <div className="flex gap-10 mt-8 justify-center items-center">
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className="flex gap-1.5">
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
                  <span>{book.reads} </span>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className="flex gap-1.5">
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
                    <small>Votos</small>
                  </span>
                  <span> {book.reviews} </span>
                </div>
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className="flex gap-1.5">
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
                    <small>Capítulos</small>
                  </span>
                  <span> {book.parts} </span>
                </div>
              </div>
              <div className="flex gap-1">
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
                  <span>Comenzar a leer</span>
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
                  <span>Agregar</span>
                </button>
              </div>
            </figcaption>
          </figure>
        </header>
        <footer></footer>
      </article>
    </>
  );
};

export default DetailsBookView;
