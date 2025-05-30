import { ListBooks } from "../particular-components/books/list-books";

export const MyBooks = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <ListBooks />
      </div>
    </>
  );
};
