import {
  loginAPI,
  refreshTokenAPI,
  logoutAPI,
  verifyTokenAPI,
} from '@/api/authAPI';
import { getAuthenticatedUserAPI } from '@/api/userAPI';
import { getAuthenticatedUserProfileAPI } from '@/api/profileAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'sonner';

// **Thunk para manejar el login**
export const loginThunk = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginAPI(email, password);
      if (response.status === 200) {
        toast.success('Haz Iniciado sesión correctamente');
        return response.data;
      }
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for get authenticated user**
export const getAuthenticatedUserThunk = createAsyncThunk(
  'auth/getAuthenticatedUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAuthenticatedUserAPI();
      if (response.status === 200) return response.data;

      
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for get authenticated profile**
export const getAuthenticatedUserProfileThunk = createAsyncThunk(
  'profiles/getAuthenticatedUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAuthenticatedUserProfileAPI();
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Thunk para verificar token de acceso**
export const verifyTokenThunk = createAsyncThunk(
  'auth/verifyToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await verifyTokenAPI();
      if (response.status === 200) return true;
      return false;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Thunk para refrescar el token**
export const refreshTokenThunk = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const response = await refreshTokenAPI();
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Thunk para cerrar sesión**
export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutAPI();
      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
