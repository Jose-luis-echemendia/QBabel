import {
  getCategoriesThunk,
  createCategoryThunk,
  updateCategoryThunk,
} from '@/store/category/thunks';
import { useAppDispatch } from './useStore';
import { useCallback } from 'react';

export const useCategory = () => {
  const dispatch = useAppDispatch();

  const handleGetCategories = useCallback(
    (type = null) => dispatch(getCategoriesThunk(type)).unwrap(),
    [dispatch]
  );

  const handleCreateCategory = (data) => dispatch(createCategoryThunk(data));

  const handleUpdateCategory = (id, data) =>
    dispatch(updateCategoryThunk({ id, data })).unwrap();

  return {
    handleGetCategories,
    handleCreateCategory,
    handleUpdateCategory,
  };
};
