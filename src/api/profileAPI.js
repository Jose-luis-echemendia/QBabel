import axiosInstance from "./axiosInstance";

// endpoint for get profiles
export const getProfilesAPI = async () => {
    try {
        const response = await axiosInstance.get("/api/profile/");
        
        return response;
      } catch (error) {
        console.error("Error en obtener los perfiles:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for update profile
export const updateProfileAPI = async (data) => {
    try {
        const response = await axiosInstance.put("/api/profile/", data);
        
        return response;
      } catch (error) {
        console.error("Error en actualizar el perfil:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for partial update profile
export const updatePartialProfileAPI = async (data) => {
    try {
        const response = await axiosInstance.patch("/api/profile/", data);
        
        return response;
      } catch (error) {
        console.error("Error en actualizar parcialmente el perfil:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for get profile by id
export const getProfileByIdAPI = async (id) => {
  try {
      const response = await axiosInstance.get(`/api/profile/${id}/`);
      
      return response;
    } catch (error) {
      console.error("Error en obtener el perfil:", error.response?.data || error.message);
      throw error;
    }
}

// endpoint for get authenticated user profile
export const getAuthenticatedUserProfileAPI = async () => {
  try {
      const response = await axiosInstance.get("/api/profile/me/");
      
      return response;
    } catch (error) {
      console.error("Error en obtener el perfil del usuario autenticado:", error.response?.data || error.message);
      throw error;
    }
}
