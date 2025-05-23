import { createBookThunk } from "@/store/book/thunks";
import { useAppDispatch } from "./useStore";

export const useBook = () => {
  const dispath = useAppDispatch();

  const handleCreateBook = (book) => {
    dispath(createBookThunk(book));
  };

  return {
    handleCreateBook,
  };
};
