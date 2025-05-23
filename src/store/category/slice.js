import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesThunk,
  createCategoryThunk,
  deleteCategoryThunk,
  updateCategoryThunk,
} from './thunks';

const initialState = {
  category: null,
  categories: [],
  loading: false,
};

export const categorySlice = createSlice({
  name: 'category',
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
      })

      // **Create category reducers**
      .addCase(createCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (state.categories.length === 0) state.categories = action.payload;
        else state.categories.push(action.payload);
      })
      .addCase(createCategoryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Update category reducers**
      .addCase(updateCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.categories.findIndex(
          (category) => category.uid === action.payload.uid
        );
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategoryThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Delete category reducers**
      .addCase(deleteCategoryThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(
          (category) => category.uid !== action.payload.uid
        );
      })
      .addCase(deleteCategoryThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
