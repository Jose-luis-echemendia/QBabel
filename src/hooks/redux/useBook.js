import { createBookThunk, getBooksThunk } from "@/store/book/thunks";
import { useAppDispatch } from "./useStore";

export const useBook = () => {
  const dispath = useAppDispatch();

  const handleCreateBook = (book) => {
    dispath(createBookThunk(book));
  };

  const handleGetBooks = (filter = null) => {
    dispath(getBooksThunk(filter));
  };

  return {
    handleCreateBook,
    handleGetBooks,
  };
};
