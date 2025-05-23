import axiosInstance from './axiosInstance';

// endpoint for get categories
export const getCategoriesAPI = async (type = null) => {
  try {
    const params = {};
    if (type) params.type = type;

    const response = await axiosInstance.get('/api/custom-category/', {
      params,
    });

    return response;
  } catch (error) {
    console.error(
      'Error en obtener las categorías:',
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for get category by id
export const getCategoryByIdAPI = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/custom-category/${id}/`);

    return response;
  } catch (error) {
    console.error(
      'Error en obtener la categoria:',
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for create category
export const createCategoryAPI = async (data) => {
  try {
    const response = await axiosInstance.post('/api/custom-category/', data);

    return response;
  } catch (error) {
    console.error(
      'Error en crear la categoria:',
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for update category
export const updateCategoryAPI = async (uid, data) => {
  try {
    const response = await axiosInstance.patch(
      `/api/custom-category/${uid}/`,
      data
    );

    return response;
  } catch (error) {
    console.error(
      'Error en actualizar la categoria:',
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for delete category
export const deleteCategoryAPI = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/custom-category/${id}/`);

    return response;
  } catch (error) {
    console.error(
      'Error en eliminar la categoria:',
      error.response?.data || error.message
    );
    throw error;
  }
};
