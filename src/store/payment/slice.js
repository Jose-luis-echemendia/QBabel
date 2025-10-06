import { createSlice } from "@reduxjs/toolkit";
import {
  payBookThunk,
  getPaymentsThunk,
  getPaymentsBooksForUserThunk,
} from "./thunks";

const initialState = {
  loading: false,
  count: 0,
  previous: null,
  next: null,
  payments: [],
  paymentsBooks: [],
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // **Pay Book Reducers**
      .addCase(payBookThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(payBookThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.payments.push(action.payload);
        state.paymentsBooks.push(
          action.payload?.purchaseInvoices.book_details.uid
        );
      })
      .addCase(payBookThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get Payments Reducers**
      .addCase(getPaymentsThunk.pending, (state) => {
        state.loading = true;
        state.payments = [];
      })
      .addCase(getPaymentsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.payments = action.payload.results.purchasesInvoices;
      })
      .addCase(getPaymentsThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get Payments books for user Reducers**
      .addCase(getPaymentsBooksForUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentsBooksForUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentsBooks = action.payload;
      })
      .addCase(getPaymentsBooksForUserThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default paymentSlice.reducer;
