import {
  getCategoriesAPI,
  getCategoryByIdAPI,
  createCategoryAPI,
  updateCategoryAPI,
  deleteCategoryAPI,
} from "@/api/categoryAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesThunk = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategoriesAPI();
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createCategoryThunk = createAsyncThunk(
  "categories/createCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createCategoryAPI(data);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk(
  "categories/deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteCategoryAPI(id);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
