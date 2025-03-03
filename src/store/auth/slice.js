import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  getAuthenticatedUserThunk,
  logoutThunk,
  refreshTokenThunk,
  verifyTokenThunk,
} from "./thunks";

const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === "true",
  jwtTokenAccess: localStorage.getItem("jwtTokenAccess"),
  jwtTokenRefresh: localStorage.getItem("jwtTokenRefresh"),
  user: localStorage.getItem("user"),
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
      state.user = null;
      localStorage.removeItem("jwtTokenAccess");
      localStorage.removeItem("jwtTokenRefresh");
      localStorage.removeItem("isAuthenticated");
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
        state.user = action.payload.user_id;
        localStorage.setItem("jwtTokenAccess", action.payload.access);
        localStorage.setItem("jwtTokenRefresh", action.payload.refresh);
        localStorage.setItem("isAuthenticated", true);
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;
      })

      .addCase(getAuthenticatedUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.id;
        localStorage.setItem("user", action.payload.id);
      })
      .addCase(getAuthenticatedUserThunk.rejected, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.user = null;
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
        localStorage.removeItem("user");
      })

      // **Refresh Token Reducers**
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.jwtTokenAccess = action.payload.access;
        state.jwtTokenRefresh = action.payload.refresh;
        localStorage.setItem("jwtTokenAccess", action.payload.access);
        localStorage.setItem("jwtTokenRefresh", action.payload.refresh);
      })
      .addCase(refreshTokenThunk.rejected, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.user = null;
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
      })
      
      // **Verify Tojen Reducers**
      .addCase(verifyTokenThunk.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload
        localStorage.setItem("isAuthenticated", true);
      })
      .addCase(verifyTokenThunk.rejected, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.user = null;
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
      })

      // **Logout Reducers**
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.user = null;
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isAuthenticated = false;
        state.jwtTokenAccess = null;
        state.jwtTokenRefresh = null;
        state.user = null;
        localStorage.removeItem("jwtTokenAccess");
        localStorage.removeItem("jwtTokenRefresh");
      });
  },
});

export default authSlice.reducer;
export const { logoutLocal } = authSlice.actions;
