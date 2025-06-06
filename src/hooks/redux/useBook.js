import {
  createBookThunk,
  getBooksThunk,
  getBooksHomeThunk,
  getBookForIdThunk,
  getTopSellerBooksFromCategoryThunk,
} from "@/store/book/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useBook = () => {
  const dispath = useAppDispatch();

  const handleCreateBook = (book) => {
    dispath(createBookThunk(book));
  };

  const handleGetBooksHome = useCallback(
    () => dispath(getBooksHomeThunk()).unwrap(),
    [dispath]
  );

  const handleGetBooks = useCallback(
    (filter = null) => dispath(getBooksThunk(filter)).unwrap(),
    [dispath]
  );

  const handleGetBookForId = (bookId) => {
    dispath(getBookForIdThunk(bookId));
  };

  const handleGetTopSellerBooksFromCategoryThunk = (category) => {
    dispath(getTopSellerBooksFromCategoryThunk(category));
  };

  return {
    handleGetBooksHome,
    handleCreateBook,
    handleGetBooks,
    handleGetBookForId,
    handleGetTopSellerBooksFromCategoryThunk,
  };
};
