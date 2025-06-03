import axiosInstance from "./axiosInstance";

// endpoint for pay book
export const payBookAPI = async (data) => {
  try {
    const response = await axiosInstance.post("/api/payment/", data);

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
export const getPaymentsAPI = async (filter = null) => {
  try {
    const params = filter ? { ...filter } : {};
    const response = await axiosInstance.get("/api/payments/", { params });

    return response;
  } catch (error) {
    console.error(
      "Error en obtener los pagos:",
      error.response?.data || error.message
    );
    throw error;
  }
};


export const getPaymentsBooksForUserAPI = async () => {
  try {

    const response = await axiosInstance.get("/api/payments-books/", );

    return response;
  } catch (error) {
    console.error(
      "Error en obtener los pagos:",
      error.response?.data || error.message
    );
    throw error;
  }
};
