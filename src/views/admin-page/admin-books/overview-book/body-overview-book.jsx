export const BodyOverviewBook = ({ book }) => {
  console.log(book);
  return (
    <>
      <p className="line-clamp-5 text-sm text-balance text-justify">
        {book.synopsis}
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
