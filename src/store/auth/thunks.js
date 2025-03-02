import { loginApi, refreshTokenApi, logoutApi, verifyTokenApi } from "@/api/authAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'sonner'

// **Thunk para manejar el login**
export const loginThunk = createAsyncThunk(
    "auth/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await loginApi(email, password);
        if (response.status === 200){
          toast.success('Haz Iniciado sesión correctamente')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk para verificar token de acceso**
export const verifyTokenThunk = createAsyncThunk(
    "auth/verifyToken",
    async (_, { rejectWithValue }) => {
      try {
        const response = await verifyTokenApi();
        if (response.status === 200) return
        return (response?.data );
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
)

// **Thunk para refrescar el token**
export const refreshTokenThunk = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const response = await refreshTokenApi();
      if (response.status === 200) return response.data
      return response.data;
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
      const response = await logoutApi();
      if (response.status === 205)
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);