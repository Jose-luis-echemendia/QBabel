import axiosInstance from "./axiosInstance";


export const loginAPI = async (email, password) => {
  try {
    const response = await axiosInstance.post("/api/token/jwt/create/users/", {
      email,
      password,
    });
    
    return response;
  } catch (error) {
    console.error("Error en login:", error.response?.data || error.message);
    throw error;
  }
};

export const refreshTokenAPI = async () => {
  try {
    const refreshToken = localStorage.getItem("jwtTokenRefresh");

    if (!refreshToken) {
      throw new Error("No hay refresh token disponible");
    }

    const response = await axiosInstance.post("/api/token/jwt/refresh/custom/", {
      refresh : refreshToken,
    });

    return response;
  } catch (error) {
    console.error("Error al refrescar el token:", error.response?.data || error.message);
    throw error;
  }
};

export const verifyTokenAPI = async () => {
  try {
    const accessToken = localStorage.getItem("jwtTokenAccess");

    if (!accessToken) {
      throw new Error("No hay access token disponible");
    }

    const response = await axiosInstance.post("/api/token/jwt/verify/custom/", {
      token: accessToken,
    });

    return response;
  } catch (error) {
    console.error("Error al verificar el token:", error.response?.data || error.message);
    throw error;
  }
}

export const logoutAPI = async () => {
  const refreshToken = localStorage.getItem("jwtTokenRefresh");

  try {
    const response = await axiosInstance.post("/api/logout/custom/", refreshToken);
    return response;
  } catch (error) {
    console.error("Error en login:", error.response?.data || error.message);
    throw error;
  }
};
