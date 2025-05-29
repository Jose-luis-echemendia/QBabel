import { createBookApi, getBooksAPI, getBookForIdAPI } from "@/api/bookAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

// ** Thunk for create book
export const createBookThunk = createAsyncThunk(
  "books/createBook",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createBookApi(data);
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