import { createSlice } from "@reduxjs/toolkit";
import {
  createBookThunk,
  updateBookThunk,
  getBooksThunk,
  getBookForIdThunk,
  getBooksHomeThunk,
  getTopSellerBooksFromCategoryThunk,
} from "./thunks";

const initialState = {
  topSellerBooksFromCategory: null,
  homeBooks: null,
  book: null,
  count: null,
  next: null,
  previous: null,
  books: [],
  loading: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Create book reducers**
      .addCase(createBookThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBookThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (state.books.length === 0) state.books = [action.payload.book];
        else state.books.push(action.payload.book);
      })
      .addCase(createBookThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Update book reducers**
      .addCase(updateBookThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBookThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.books.findIndex(
          (book) => book.uid === action.payload.book.uid
        );
        if (index !== -1) {
          state.books[index] = action.payload.book;
        }
      })
      .addCase(updateBookThunk.rejected, (state) => {
        state.loading = false;
      })

      // **   Get books reducers**
      .addCase(getBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.books = action.payload.results.books;
      })
      .addCase(getBooksThunk.rejected, (state) => {
        state.loading = false;
      })

      // ** Get home books reducers**
      .addCase(getBooksHomeThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBooksHomeThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.homeBooks = action.payload;
      })
      .addCase(getBooksHomeThunk.rejected, (state) => {
        state.loading = false;
      })

      // ** Get top seller books from category reducers**
      .addCase(getTopSellerBooksFromCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getTopSellerBooksFromCategoryThunk.fulfilled,
        (state, action) => {
          state.loading = false;
          state.topSellerBooksFromCategory = action.payload.books;
        }
      )
      .addCase(getTopSellerBooksFromCategoryThunk.rejected, (state) => {
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
