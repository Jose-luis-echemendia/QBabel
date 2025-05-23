import axiosInstance from './axiosInstance';

// endpoit for create book
export const createBookApi = async (data) => {
  try {
    const response = await axiosInstance.post('/api/book/', data);

    return response;
  } catch (error) {
    console.error(
      'Error al crear el libro:',
      error.response?.data || error.message
    );
    throw error;
  }
};
