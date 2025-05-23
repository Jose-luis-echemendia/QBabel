import { createSlice } from "@reduxjs/toolkit";
import { createBookThunk } from "./thunks";

const initialState = {
  book: null,
  books: [],
  loading: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Create category reducers**
      .addCase(createBookThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBookThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (state.books.length === 0) state.books = action.payload;
        else state.books.push(action.payload);
      })
      .addCase(createBookThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
