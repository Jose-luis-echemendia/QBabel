import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk } from "./thunks";

const initialState = {
  category: null,
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Get categories reducers**
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.categories;
      })
      .addCase(getCategoriesThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
