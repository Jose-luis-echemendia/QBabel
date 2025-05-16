import { getCategoriesThunk } from "@/store/category/thunks";
import { useAppDispatch } from "./useStore";

export const useCategory = () => {
  const dispath = useAppDispatch();

  const handleGetCategories = () => {
    dispath(getCategoriesThunk());
  };

  return {
    handleGetCategories,
  };
};
