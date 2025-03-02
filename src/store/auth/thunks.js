import { loginApi, refreshTokenApi, logoutApi } from "@/api/authAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

// **Thunk para manejar el login**
export const loginThunk = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await loginApi(email, password);
        return response;
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk para verificar token de acceso**
export const checkAuthenticated = createAsyncThunk(
    "auth/verify"
)

// **Thunk para refrescar el token**
export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = await refreshTokenApi();
      return accessToken;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
  
// **Thunk para cerrar sesión**
export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);