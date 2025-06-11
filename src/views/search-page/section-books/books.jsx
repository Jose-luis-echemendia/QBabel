// src/components/books.jsx
import { useBook } from "@/hooks/redux/useBook";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";

// Asegúrate de tener los paths completos para tus SVGs
const LoadingSpinnerSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-14 animate-spin text-gray-500" // o size-10 para el más pequeño
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1.5m0 15V21m8.25-9h-1.5M4.5 12H3m16.5 6.75l-.75-.75m-15 0l-.75.75m15-15l-.75.75M4.5 4.5l-.75-.75M12 12a3 3 0 100-6 3 3 0 000 6z"
    />
  </svg>
);

const HeartBannerSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-10 text-black-500" // Asumo que es un color de tu theme
  >
    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
  </svg>
);

const DiscountStarSVG = () => (
  <svg
    width="27"
    height="26"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="size-14 text-primary" // Asumo que 'primary' es un color de tu theme
  >
    <path
      d="M13.5 0L15.6028 4.12816L19.3574 1.28741L19.392 5.88533L24.0547 4.89463L22.0142 9.05166L26.6615 10.1072L22.95 13L26.6615 15.8928L22.0142 16.9483L24.0547 21.1054L19.392 20.1147L19.3574 24.7126L15.6028 21.8718L13.5 26L11.3972 21.8718L7.64257 24.7126L7.60802 20.1147L2.94528 21.1054L4.98584 16.9483L0.338473 15.8928L4.05 13L0.338473 10.1072L4.98584 9.05166L2.94528 4.89463L7.60802 5.88533L7.64257 1.28741L11.3972 4.12816L13.5 0Z"
      fill="currentColor" // Usa currentColor para heredar el text-primary
    />
  </svg>
);

const PriceIconSVG = () => (
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
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
const ReadsIconSVG = () => (
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
);
const VotesIconSVG = () => (
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
);
const ChaptersIconSVG = () => (
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
);

export const Books = ({ booksToDisplay }) => {
  const { loading: globalLoading, next } = useAppSelector(
    (state) => state.book
  );
  const { books: allBooksFromStore } = useAppSelector((state) => state.book);
  const { handleFetchMoreBooks } = useBook();

  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (globalLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && next) {
          handleFetchMoreBooks(next);
        }
      });

      if (node) observer.current.observe(node);
    },
    [globalLoading, next, handleFetchMoreBooks]
  );

  // Grid para mensajes de carga/vacío. Ocupa todo el espacio de .md:col-span-8 de su padre
  // Tailwind no anida grids, así que el col-span aquí es relativo a este div.
  // Podrías simplificarlo y no usar grid aquí si el mensaje es simple.
  if (globalLoading && (!allBooksFromStore || allBooksFromStore.length === 0)) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center py-10">
        <LoadingSpinnerSVG />
        <p className="mt-2 text-gray-500">Cargando libros...</p>
      </div>
    );
  }

  if (!globalLoading && (!booksToDisplay || booksToDisplay.length === 0)) {
    if (!allBooksFromStore || allBooksFromStore.length === 0) {
      return (
        <div className="w-full text-center py-10 text-gray-500">
          No se encontraron libros para tu búsqueda.
        </div>
      );
    }
    return (
      <div className="w-full text-center py-10 text-gray-500">
        Ningún libro coincide con los filtros aplicados.
      </div>
    );
  }

  return (
    <>
      {/* Grid para la lista de libros. 
          Este grid está DENTRO del div md:col-span-8 de SectionBooks.
          Por lo tanto, sus col-span son relativos a ESTE div.
          El col-span-8 anterior ya no aplica aquí.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-9 w-full h-fit py-3 px-1 md:px-8 mt-5">
        {" "}
        {/* Ajustado px */}
        {booksToDisplay &&
          booksToDisplay.map((book, index) => {
            const isLastElement = booksToDisplay.length === index + 1;
            return (
              <Link
                to={`/books/${book.uid}`}
                key={book.uid}
                ref={isLastElement ? lastBookElementRef : null}
                className="relative h-full flex flex-col sm:flex-row items-center sm:items-start p-3 gap-3 bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-200" // sm:flex-row, sm:items-start, gap-3
              >
                <div className="absolute -top-5 -left-5">
                  <HeartBannerSVG />
                  <span
                    className={`flex items-center justify-center absolute top-2 left-4 text-primary font-bold ${
                      index + 1 >= 10 ? "text-xs right-3.5" : "right-4" // Ajuste para números de dos dígitos
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>

                {(book.is_free || book.is_discount_active) && (
                  <div className="absolute top-5 right-6">
                    <DiscountStarSVG />
                    <div className="flex items-center justify-center absolute inset-0 text-black-500 font-bold text-xs sm:text-sm">
                      {" "}
                      {/* inset-0 para centrar mejor, text-xs */}
                      {book.is_free && !book.is_discount_active && (
                        <span>Gratis</span>
                      )}
                      {book.is_discount_active && (
                        <span>-{parseInt(book.discount_percentage)}%</span>
                      )}
                      {book.is_free && book.is_discount_active && (
                        <span className="block mt-4">Gratis</span>
                      )}{" "}
                      {/* Si es gratis y con descuento */}
                    </div>
                  </div>
                )}

                <img
                  src={book.cover_details?.image || "default-cover.jpg"} // Añadido optional chaining y fallback
                  alt={book.title}
                  className="w-32 sm:w-40 h-auto rounded-t-lg sm:rounded-l-lg sm:rounded-t-none object-cover flex-shrink-0" // Ajustes de tamaño y redondeo
                />

                <div className="flex flex-col w-full h-full py-1.5 gap-1.5">
                  <h3 className="text-lg sm:text-xl w-full sm:w-[85%] text-gray-800 font-opensans font-bold line-clamp-1">
                    {book.title}
                  </h3>
                  <div className="text-sm">
                    <strong>Por:</strong>
                    <span className="text-gray-700 ml-1">
                      {book.author_details?.user_name || "Desconocido"}{" "}
                      {/* Optional chaining */}
                    </span>
                  </div>
                  {book.is_complete ? (
                    <div className="w-auto inline-block max-w-[50%] sm:max-w-[35%] h-6 flex place-items-center justify-center px-2 py-1 rounded-xl bg-green-800">
                      <span className="text-white-100 font-semibold text-xs">
                        Completada
                      </span>
                    </div>
                  ) : (
                    <div className="w-auto inline-block max-w-[50%] sm:max-w-[35%] h-6 flex place-items-center justify-center px-2 py-1 rounded-xl bg-gray-cam">
                      <span className="text-white-100 font-semibold text-xs">
                        En curso
                      </span>
                    </div>
                  )}
                  <div className="flex gap-x-2 sm:gap-x-3 gap-y-1 mt-2 sm:mt-3 ml-0 justify-start items-center flex-wrap">
                    {!book.is_free && (
                      <>
                        <div className="flex flex-col gap-0.5 items-center justify-center px-1">
                          <span className="flex gap-1 items-center text-gray-800">
                            <PriceIconSVG />
                            <small className="text-xs">Precio</small>
                          </span>
                          <span className="text-xs sm:text-sm font-bold">
                            ${book.price}{" "}
                            {/* Asumiendo que price es un número */}
                          </span>
                        </div>
                        <div className="w-[1px] bg-gray-400 h-10 sm:h-14 hidden sm:block" />
                      </>
                    )}
                    <div className="flex flex-col gap-0.5 items-center justify-center px-1">
                      <span className="flex gap-1 items-center text-gray-800">
                        <ReadsIconSVG />
                        <small className="text-xs">Lecturas</small>
                      </span>
                      <span className="text-xs sm:text-sm font-bold">
                        {book.count_reads}
                      </span>
                    </div>
                    <div className="w-[1px] bg-gray-400 h-10 sm:h-14 hidden sm:block" />
                    <div className="flex flex-col gap-0.5 items-center justify-center px-1">
                      <span className="flex gap-1 items-center text-gray-800">
                        <VotesIconSVG />
                        <small className="text-xs">Votos</small>
                      </span>
                      <span className="text-xs sm:text-sm font-bold">
                        {book.avg_rating?.toFixed(1) || "N/A"}{" "}
                        {/* Optional chaining y toFixed */}
                      </span>
                    </div>
                    <div className="w-[1px] bg-gray-400 h-10 sm:h-14 hidden sm:block" />
                    <div className="flex flex-col gap-0.5 items-center justify-center px-1">
                      <span className="flex gap-1 items-center text-gray-800">
                        <ChaptersIconSVG />
                        <small className="text-xs">Capítulos</small>
                      </span>
                      <span className="text-xs sm:text-sm font-bold">
                        {book.number_chapters}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-start text-gray-800 pr-0 sm:pr-5 mt-1 line-clamp-2 sm:line-clamp-3">
                    {book.synopsis}
                  </p>
                </div>
              </Link>
            );
          })}
      </div>

      {globalLoading && allBooksFromStore && allBooksFromStore.length > 0 && (
        <div className="w-full py-5 flex flex-col items-center justify-center">
          <LoadingSpinnerSVG />
          <span className="ml-2 mt-1 text-gray-500">
            Cargando más libros...
          </span>
        </div>
      )}

      {!next &&
        allBooksFromStore &&
        allBooksFromStore.length > 0 &&
        booksToDisplay.length > 0 && ( // Solo mostrar si hay libros y no hay 'next'
          <div className="w-full text-center py-5 text-gray-500">
            No hay más libros para mostrar.
          </div>
        )}
    </>
  );
};
