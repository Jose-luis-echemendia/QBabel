// src/api/authApi.js
import axiosInstance from "./axiosInstance";
import { toast } from 'sonner'

export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post("/api/token/jwt/create/users/", {
      email,
      password,
    });
    
    if (response.status === 200){
      toast.success('Haz Iniciado sesión correctamente')
    }
    return response.data;
  } catch (error) {
    console.error("Error en login:", error.response?.data || error.message);
    throw error;
  }
};

export const refreshTokenApi = async () => {
  try {
    const refreshToken = localStorage.getItem("jwtTokenRefresh");

    if (!refreshToken) {
      throw new Error("No hay refresh token disponible");
    }

    const response = await axiosInstance.post("/api/token/jwt/refresh/custom/", {
      refreshToken,
    });

    localStorage.setItem("jwtTokenAccess", response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error("Error al refrescar el token:", error.response?.data || error.message);
    throw error;
  }
};

export const logoutApi = async () => {
  localStorage.removeItem("jwtTokenAccess");
  localStorage.removeItem("jwtTokenRefresh");

  try {
    const response = await axiosInstance.post("/api/logout/custom/");
    return response.status;
  } catch (error) {
    console.error("Error en login:", error.response?.data || error.message);
    throw error;
  }
};
