import { CoverGalleries } from "./cover-galleries";

export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5 grid grid-cols-11 gap-3">
        <div className="col-span-4 h-full">
          <CoverGalleries covers={book.covers} alt={book.title} />
        </div>
        <div className="col-span-7 relative flex flex-col gap-3 leading-8">
          <h3 className="text-3xl font-semibold text-black">{book.title}</h3>
          <span className="text-gray-700 font-semibold">
            {book.author.name}
          </span>
          <div className="flex gap-2">
            {book.isFree ? (
              <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">Gratuito!</span>
              </div>
            ) : (
              <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">De Pago</span>
              </div>
            )}

            {book.isComplete ? (
              <div className="p-1 h-8 flex items-center rounded-xl bg-green-800 -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">Completada</span>
              </div>
            ) : (
              <div className="p-1 h-8 flex items-center rounded-xl bg-gray-cam -ml-[1px]">
                <span className="text-white-100 text-sm font-semibold">En curso</span>
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
