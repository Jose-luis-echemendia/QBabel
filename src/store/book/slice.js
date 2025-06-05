import { createSlice } from "@reduxjs/toolkit";
import { createBookThunk, getBooksThunk, getBookForIdThunk } from "./thunks";

const initialState = {
  homeBooks: null,
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
        const newBook = action.payload.book;

        state.books = Array.isArray(state.books)
          ? [...state.books, newBook]
          : [newBook];
      })
      .addCase(createBookThunk.rejected, (state) => {
        state.loading = false;
      })

      // **   Get books reducers**
      .addCase(getBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBooksThunk.rejected, (state) => {
        state.loading = false;
      })

      // ** Get book for id reducers
      .addCase(getBookForIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookForIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload.book;
      })
      .addCase(getBookForIdThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
