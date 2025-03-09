export const BookGroup = ({ books, itemHeight }) => (
  <div className="flex items-center justify-center gap-2">
    {books.map((book) => (
      <figure key={book.id} className="w-1/4 h-56"> {/* Ajusta el ancho según el número de libros por slide */}
        <img
          src={book.img}
          alt={book.title}
          className="h-full w-full object-cover rounded-xl"
        />
      </figure>
    ))}
  </div>
);