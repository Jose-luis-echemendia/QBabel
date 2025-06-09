import { createSlice } from "@reduxjs/toolkit";
import { getCommentsThunk, createCommentThunk } from "./thunks";

const initialState = {
  comment: null,
  count: null,
  next: null,
  previous: null,
  comments: [],
  loading: false,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Get comments reducers**
      .addCase(getCommentsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCommentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.comments = action.payload.results.comments;
      })
      .addCase(getCommentsThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Create comment reducers**
      .addCase(createCommentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCommentThunk.fulfilled, (state, action) => {
        state.loading = false;
        if (state.comments.length === 0) state.comments = [action.payload];
        else {
          const newComment = action.payload; // o action.payload.comment si la API lo devuelve así
          state.comments = [newComment, ...state.comments];
        }
      })
      .addCase(createCommentThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default commentSlice.reducer;
