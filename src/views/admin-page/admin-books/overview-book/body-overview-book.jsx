export const BodyOverviewBook = ({ book }) => {
  return (
    <>
      <p className="line-clamp-5 text-sm text-balance text-justify">
        {book.sumary} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit iste aliquid magni eos, dicta eligendi voluptates aspernatur
        eaque corrupti, incidunt iusto! Blanditiis quibusdam, eum enim ipsum
        libero asperiores eius tenetur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolorem laborum unde placeat eaque neque accusamus
        excepturi dolor doloribus aliquid! Accusantium perspiciatis similique,
        nobis cum fugiat debitis quod ipsum ipsam eligendi! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Odit id accusantium et,
        reiciendis labore nisi fuga distinctio tenetur nesciunt voluptatibus
        ullam totam. Ut reiciendis rerum ea similique ratione voluptatem
        corporis.
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
    </>
  );
};
