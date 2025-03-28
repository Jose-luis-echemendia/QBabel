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
        <div className="col-span-11 flex items-center justify-center mt-4">
          tablita
        </div>
      </section>
    </>
  );
};
