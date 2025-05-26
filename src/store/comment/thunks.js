import { getCommentsAPI, createCommentAPI } from "@/api/commentAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCommentsThunk = createAsyncThunk(
  "comments/getComments",
  async (type = null, { rejectWithValue }) => {
    try {
      const response = await getCommentsAPI(type);
      if (response.status === 200) {
        return response.data;
      }

      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const createCommentThunk = createAsyncThunk(
  "comments/createComment",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createCommentAPI(data);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
