import axiosInstance from "./axiosInstance";

// endpoint for get users
export const getUsersAPI = async () => {
    try {
        const response = await axiosInstance.get("/api/custom-users/",);
        
        return response;
      } catch (error) {
        console.error("Error en obtener los usuarios:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for get user by id
export const getUserByIdAPI = async (id) => {
  try {
      const response = await axiosInstance.get(`/api/custom-users/${id}/`);
      
      return response;
    } catch (error) {
      console.error("Error en obtener el usuario:", error.response?.data || error.message);
      throw error;
    }
}

// endpoint for create user
export const createUserAPI = async (data) => {
    try {
        const response = await axiosInstance.post("/api/custom-users/", data);
        
        return response;
      } catch (error) {
        console.error("Error en crear el usuario:", error.response?.data || error.message);
        throw error;
      }
} 

// endpoint for update user
export const updateUserAPI = async (data) => {
    try {
        const response = await axiosInstance.put(`/api/custom-users/${data.id}/`, data);
        
        return response;
      } catch (error) {
        console.error("Error en actualizar el usuario:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for update partial user
export const updatePartialUserAPI = async (data) => {
    try {
        const response = await axiosInstance.patch(`/api/custom-users/${data.id}/`, data);
        
        return response;
      } catch (error) {
        console.error("Error en actualizar el usuario:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for delete user
export const deleteUserAPI = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/custom-users/${id}/`);
        
        return response;
      } catch (error) {
        console.error("Error en eliminar el usuario:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for get authenticated user
export const getAuthenticatedUserAPI = async () => {
  try {
    const accessToken = localStorage.getItem("jwtTokenAccess");
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    if (!accessToken || !isAuthenticated) return
    const response = await axiosInstance.get("/api/custom-users/me/");
    return response;
  } catch (error) {
    console.error(
      "Error al obtener el usuario authenticado:",
      error.response?.data || error.message
    );
    throw error;
  }
};
