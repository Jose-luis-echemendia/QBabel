import {
  getCategoriesThunk,
  createCategoryThunk,
} from "@/store/category/thunks";
import { useAppDispatch } from "./useStore";

export const useCategory = () => {
  const dispath = useAppDispatch();

  const handleGetCategories = (type = null) => {
    dispath(getCategoriesThunk(type));
  };

  const handleCreateCategory = (category) => {
    dispath(createCategoryThunk(category));
  };

  return {
    handleGetCategories,
    handleCreateCategory,
  };
};
