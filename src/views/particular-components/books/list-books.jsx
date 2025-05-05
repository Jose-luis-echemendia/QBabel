import { bestBooksData as books } from "@/constants/home-page/best-books";
import { CardBook } from "./card-book";

export const ListBooks = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {books.map((book) => (
            <CardBook key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};
