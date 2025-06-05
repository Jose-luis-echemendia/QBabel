import axiosInstance from "./axiosInstance";

// endpoint for get library
export const getLIbraryAPI = async () => {
  try {
    const response = await axiosInstance.get("/api/library/");

    return response;
  } catch (error) {
    console.error(
      "Error en obtener la librería:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for get all items in library
export const getItemsOfLIbraryAPI = async (filters = {}) => {
  try {
    const response = await axiosInstance.get("/api/library/items/", {
      params: filters, // aquí se pasan los filtros como query params
    });

    return response;
  } catch (error) {
    console.error(
      "Error en obtener la librería:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for add book
export const addBookToLibraryAPI = async (data) => {
  try {
    const response = await axiosInstance.post("/api/library/add-book/", {
      book: data,
    });

    return response;
  } catch (error) {
    console.error(
      "Error en agregar el libro a la libreria:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for disaggregate bokk
export const disaggregateBookFromLibraryAPI = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/api/disaggregate-book/${id}/`
    );

    return response;
  } catch (error) {
    console.error(
      "Error en eliminar la categoria:",
      error.response?.data || error.message
    );
    throw error;
  }
};
