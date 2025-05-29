import { createSlice } from "@reduxjs/toolkit";
import {
  getLibraryThunk,
  addBookToLibraryThunk,
  disaggregateBookFromLibraryThunk,
} from "./thunks";
const initialState = {
  library: [],
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
        state.library = action.payload;
      })
      .addCase(getLibraryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Add book to library reducers**
      .addCase(addBookToLibraryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookToLibraryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.library.push(action.payload);
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
        const index = state.library.findIndex(
          (book) => book.id === action.payload.id
        );
        if (index !== -1) {
          state.library.splice(index, 1);
        }
      })
      .addCase(disaggregateBookFromLibraryThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default librarySlice.reducer;
