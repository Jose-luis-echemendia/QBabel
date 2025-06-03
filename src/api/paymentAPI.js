import axiosInstance from "./axiosInstance";

// endpoint for pay book
export const payBookAPI = async () => {
  try {
    const response = await axiosInstance.post("/api/payment/");

    return response;
  } catch (error) {
    console.error(
      "Error al pagar libro:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// endpoint for get all payment
export const getUsersAPI = async () => {
  try {
    const response = await axiosInstance.get("/api/payments/");

    return response;
  } catch (error) {
    console.error(
      "Error en obtener los pagos:",
      error.response?.data || error.message
    );
    throw error;
  }
};
//Compra realizada satisfactoriamente
