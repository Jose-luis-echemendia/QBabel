import {
    createBookApi
  } from "@/api/bookAPI";
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
