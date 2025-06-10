import {
  createBookThunk,
  updateBookThunk,
  getBooksThunk,
  getBooksHomeThunk,
  fetchMoreBooksThunk,
  getBookForIdThunk,
  getTopSellerBooksFromCategoryThunk,
} from "@/store/book/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useBook = () => {
  const dispatch = useAppDispatch();

  const handleCreateBook = (book) => {
    dispatch(createBookThunk(book));
  };

  const handleUpdateBook = (id, data) => {
    dispatch(updateBookThunk(id, data)).unwrap();
  };

  const handleGetBooksHome = useCallback(
    () => dispatch(getBooksHomeThunk()).unwrap(),
    [dispatch]
  );

  const handleGetBooks = useCallback(
    (filter = null) => dispatch(getBooksThunk(filter)).unwrap(),
    [dispatch]
  );

  const handleFetchMoreBooks = useCallback(
    (next = null) => dispatch(fetchMoreBooksThunk(next)).unwrap(),
    [dispatch]
  );

  const handleGetBookForId = (bookId) => {
    dispatch(getBookForIdThunk(bookId));
  };

  const handleGetTopSellerBooksFromCategoryThunk = (category) => {
    dispatch(getTopSellerBooksFromCategoryThunk(category));
  };

  return {
    handleUpdateBook,
    handleGetBooksHome,
    handleCreateBook,
    handleGetBooks,
    handleFetchMoreBooks,
    handleGetBookForId,
    handleGetTopSellerBooksFromCategoryThunk,
  };
};
