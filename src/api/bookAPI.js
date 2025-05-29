import axiosInstance from "./axiosInstance";

// endpoit for create book
export const createBookApi = async (data) => {
  try {
    const response = await axiosInstance.post("/api/book/", data);

    return response;
  } catch (error) {
    console.error(
      "Error al crear el libro:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for get books
export const getBooksAPI = async (filter = null) => {
  try {
    // 1. Crear objeto de parámetros basado en el filtro
    const params = filter ? { ...filter } : {};

    // 2. Hacer la petición GET con los parámetros
    const response = await axiosInstance.get("/api/book/", {
      params, // Enviar los parámetros como query strings
    });

    return response;
  } catch (error) {
    console.error(
      "Error en obtener los libros:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const getBookForIdAPI = async (bookId) => {
  try {
    const response = await axiosInstance.get(`/api/book/${bookId}/`);

    return response;
  } catch (error) {
    console.error(
      "Error al obtener el libro por ID:",
      error.response?.data || error.message
    );
    throw error;
  }
}
