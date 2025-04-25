import axiosInstance from "./axiosInstance";

// endpoint for get categories
export const getCategoriesAPI = async () => {
    try {
        const response = await axiosInstance.get("/api/custom-category/");
        
        return response;
      } catch (error) {
        console.error("Error en obtener las categorias:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for get category by id
export const getCategoryByIdAPI = async (id) => {
  try {
      const response = await axiosInstance.get(`/api/custom-category/${id}/`);
      
      return response;
    } catch (error) {
      console.error("Error en obtener la categoria:", error.response?.data || error.message);
      throw error;
    }
}

// endpoint for create category
export const createCategoryAPI = async (data) => {
    try {
        const response = await axiosInstance.post("/api/custom-category/", data);
        
        return response;
      } catch (error) {
        console.error("Error en crear la categoria:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for update category
export const updateCategoryAPI = async (data) => {
    try {
        const response = await axiosInstance.put(`/api/custom-category/${data.id}/`, data);
        
        return response;
      } catch (error) {
        console.error("Error en actualizar la categoria:", error.response?.data || error.message);
        throw error;
      }
}

// endpoint for delete category
export const deleteCategoryAPI = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/custom-category/${id}/`);
        
        return response;
      } catch (error) {
        console.error("Error en eliminar la categoria:", error.response?.data || error.message);
        throw error;
      }
}   
