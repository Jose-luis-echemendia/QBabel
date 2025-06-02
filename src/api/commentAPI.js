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

// endpoint for react comment
export const reactCommentAPI = async (data) => {
  try {
    const response = await axiosInstance.post("/api/comment/react/", data);

    return response;
  } catch (error) {
    console.error(
      "Error en reaccionar al comentario:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for unreact comment
export const unReactCommentsAPI = async (pkReact) => {
  try {
    const response = await axiosInstance.delete(
      `/api/comment/unreact/${pkReact}`
    );

    return response;
  } catch (error) {
    console.error(
      "Error en elimar la reaccion:",
      error.response?.data || error.message
    );
    throw error;
  }
};
