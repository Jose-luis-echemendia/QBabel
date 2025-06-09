import { createSlice } from "@reduxjs/toolkit";
import {
  getLibraryThunk,
  addBookToLibraryThunk,
  disaggregateBookFromLibraryThunk,
  getItemsOfLIbraryThunk,
} from "./thunks";

const initialState = {
  library: null,
  count: null,
  next: null,
  previous: null,
  items: null,
  loading: false,
};

export const librarySlice = createSlice({
  name: "library",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Get library reducers**
      .addCase(getLibraryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLibraryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload.library;
      })
      .addCase(getLibraryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get items of library reducers**
      .addCase(getItemsOfLIbraryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItemsOfLIbraryThunk.fulfilled, (state, action) => {
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.items = action.payload.results.items;
        state.loading = false;
      })
      .addCase(getItemsOfLIbraryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Add book to library reducers**
      .addCase(addBookToLibraryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookToLibraryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload.library;
      })
      .addCase(addBookToLibraryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Disaggregate book from library reducers**
      .addCase(disaggregateBookFromLibraryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(disaggregateBookFromLibraryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.library = action.payload.library;
      })
      .addCase(disaggregateBookFromLibraryThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default librarySlice.reducer;
