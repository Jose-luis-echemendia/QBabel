import {
  createBookApi,
  updateBookAPI,
  getBooksAPI,
  getBooksHomeAPI,
  getBookForIdAPI,
  getTopSellerBooksFromCategoryAPI,
} from "@/api/bookAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

// ** Thunk for create book
export const createBookThunk = createAsyncThunk(
  "books/createBook",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createBookApi(data);
      if (response.status === 201) {
        toast.success("Tu libro ha sido registrado satisfactoriamente");
        return response.data;
      }
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateBookThunk = createAsyncThunk(
  "categories/updateBook",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updateBookAPI(id, data);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get books
export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (filter = null, { rejectWithValue }) => {
    try {
      const response = await getBooksAPI(filter);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get home books
export const getBooksHomeThunk = createAsyncThunk(
  "books/getBooksHome",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getBooksHomeAPI();
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get book for id
export const getBookForIdThunk = createAsyncThunk(
  "books/getBookForId",
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await getBookForIdAPI(bookId);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get top seller books from category
export const getTopSellerBooksFromCategoryThunk = createAsyncThunk(
  "books/getTopSellerBooksFromCategory",
  async (category, { rejectWithValue }) => {
    try {
      const response = await getTopSellerBooksFromCategoryAPI(category);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
