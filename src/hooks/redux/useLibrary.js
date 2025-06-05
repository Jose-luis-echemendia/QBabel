import {
  getLibraryThunk,
  addBookToLibraryThunk,
  disaggregateBookFromLibraryThunk,
  getItemsOfLIbraryThunk,
} from "@/store/library/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useLibrary = () => {
  const dispatch = useAppDispatch();

  const handleGetLibrary = useCallback(
    () => dispatch(getLibraryThunk()).unwrap(),
    [dispatch]
  );

  const handleGetItemsOfLIbraryThunk = useCallback(
    (filters) => dispatch(getItemsOfLIbraryThunk(filters)).unwrap(),
    [dispatch]
  );

  const handleAddBookToLibrary = (data) =>
    dispatch(addBookToLibraryThunk(data));

  const handleDisaggregateBookFromLibrary = (id) =>
    dispatch(disaggregateBookFromLibraryThunk(id)).unwrap();

  return {
    handleGetLibrary,
    handleGetItemsOfLIbraryThunk,
    handleAddBookToLibrary,
    handleDisaggregateBookFromLibrary,
  };
};
