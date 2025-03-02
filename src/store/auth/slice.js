import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshTokenThunk } from "./thunks";

const initialState = {
  isAuthenticated: true,
  jwtTokenAccess: null,
  jwtTokenRefresh: null,
  userId: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logoutLocal: (state) => {
      state.isAuthenticated = false;
      state.jwtTokenAccess = null;
      state.jwtTokenRefresh = null;
      state.userId = null;
      localStorage.removeItem("jwtTokenAccess");
      localStorage.removeItem("jwtTokenRefresh");
    },
  },
  extraReducers: (builder) => {
    builder
      // **Login Reducers**
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.jwtTokenAccess = action.payload.access;
        state.jwtTokenRefresh = action.payload.refresh;
        state.userId = action.payload.user_id;
        localStorage.setItem("jwtTokenAccess", action.payload.accessToken);
        localStorage.setItem("jwtTokenRefresh", action.payload.refresh);
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Refresh Token Reducers**
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.jwtTokenAccess = action.payload;
        localStorage.setItem("jwtTokenAccess", action.payload);
      })

      // **Logout Reducers**
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.userId = null;
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
      });
  },
});

export default authSlice.reducer;
export const { logoutLocal } = authSlice.actions;
