import axiosInstance from "./axiosInstance";

// endpoint for get comment
export const getCommentsAPI = async (pkBook) => {
  try {
    const response = await axiosInstance.get(`/api/comment/book/${pkBook}`);

    return response;
  } catch (error) {
    console.error(
      "Error en obtener los comentarioss:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for create comment
export const createCommentAPI = async (data) => {
  try {
    const response = await axiosInstance.post("/api/comment/", data);

    return response;
  } catch (error) {
    console.error(
      "Error en crear el comentario:",
      error.response?.data || error.message
    );
    throw error;
  }
};
