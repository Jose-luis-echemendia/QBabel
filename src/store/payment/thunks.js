import {
  payBookAPI,
  getPaymentsAPI,
  getPaymentsBooksForUserAPI,
} from "@/api/paymentAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

// ** Thunk for pay book
export const payBookThunk = createAsyncThunk(
  "payment/payBook",
  async (data, { rejectWithValue }) => {
    try {
      const response = await payBookAPI(data);
      if (response.status === 201) {
        toast.success("Compra realizada satisfactoriamente");
        return response.data;
      }
      return rejectWithValue(response?.data);
    } catch (error) {
      if (
        error.response?.status === 400 &&
        error.response?.data?.detail?.detail ===
          "This book has already been purchased by this buyer."
      ) {
        toast.info("Este libro ya lo tienes pagado.");
      }
      console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get payments
export const getPaymentsThunk = createAsyncThunk(
  "payment/getPayments",
  async (filter = null, { rejectWithValue }) => {
    try {
      const response = await getPaymentsAPI(filter);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ** Thunk for get payments
export const getPaymentsBooksForUserThunk = createAsyncThunk(
  "payment/getPaymentsBooksForUser",
  async (filter = null, { rejectWithValue }) => {
    try {
      const response = await getPaymentsBooksForUserAPI(filter);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
