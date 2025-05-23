import axiosInstance from "./axiosInstance";

// endpoit for create book
export const createBookApi = async (data) => {
  try {
    const response = await axiosInstance.post("/api/token/jwt/create/users/", data);

    return response;
  } catch (error) {
    console.error("Error al crear el libro:", error.response?.data || error.message);
    throw error;
  }
};
