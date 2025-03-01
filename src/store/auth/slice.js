import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  jwtTokenAccess: null,
  jwtTokenRefresh: null,
  user: {},
  loading: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("state", state);
      console.log("action", action);
    },
  },
});

export default authSlice.reducer;
export const { login } = authSlice.actions;
