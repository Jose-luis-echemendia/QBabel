import { CoverGalleries } from "./cover-galleries";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5 grid grid-cols-11 gap-3">
        <div className="col-span-4 h-full">
          <CoverGalleries covers={book.covers} alt={book.title} />
        </div>
        <div className="col-span-7 relative flex flex-col gap-3 leading-8">
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

          <h3 className="text-3xl font-semibold text-black">{book.title}</h3>
          <span className="text-gray-700 font-semibold">
            {book.author.name}
          </span>
          <div className="flex gap-2">
            {book.isFree ? (
              <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">
                  Gratuito!
                </span>
              </div>
            ) : (
              <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">
                  De Pago
                </span>
              </div>
            )}

            {book.isComplete ? (
              <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">
                  Completada
                </span>
              </div>
            ) : (
              <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">
                  En curso
                </span>
              </div>
            )}
          </div>
          <p className="line-clamp-5 text-sm text-balance text-justify">
            {book.sumary} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit iste aliquid magni eos, dicta eligendi voluptates
            aspernatur eaque corrupti, incidunt iusto! Blanditiis quibusdam, eum
            enim ipsum libero asperiores eius tenetur! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolorem laborum unde placeat
            eaque neque accusamus excepturi dolor doloribus aliquid! Accusantium
            perspiciatis similique, nobis cum fugiat debitis quod ipsum ipsam
            eligendi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odit id accusantium et, reiciendis labore nisi fuga distinctio
            tenetur nesciunt voluptatibus ullam totam. Ut reiciendis rerum ea
            similique ratione voluptatem corporis.
          </p>
          <span>{book.license}</span>
          <div className="flex flex-wrap gap-3">
            {book.categories.map((category) => (
              <span
                key={category.id}
                className="px-2.5 py-1 flex items-center h-8 rounded-2xl bg-gray-200 text-black font-semibold"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-11 flex gap-6 items-center justify-center mt-4">
          {!book.isFree && (
            <>
              <div className="flex flex-col gap-1 items-center justify-center px-1.5">
                <span className="flex gap-1.5  text-gray-800">
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

                  <small>Price</small>
                </span>
                <span className="text-sm font-bold">{book.price}</span>
              </div>
              <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
            </>
          )}
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
      </section>
    </>
  );
};
