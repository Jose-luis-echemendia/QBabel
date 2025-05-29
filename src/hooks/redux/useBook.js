import {
  createBookThunk,
  getBooksThunk,
  getBookForIdThunk,
} from "@/store/book/thunks";
import { useAppDispatch } from "./useStore";

export const useBook = () => {
  const dispath = useAppDispatch();

  const handleCreateBook = (book) => {
    dispath(createBookThunk(book));
  };

  const handleGetBooks = (filter = null) => {
    dispath(getBooksThunk(filter));
  };

  const handleGetBookForId = (bookId) => {
    dispath(getBookForIdThunk(bookId));
  };

  return {
    handleCreateBook,
    handleGetBooks,
    handleGetBookForId,
  };
};
