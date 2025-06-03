import {
  payBookThunk,
  getPaymentsThunk,
  getPaymentsBooksForUserThunk,
} from "@/store/payment/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const usePayment = () => {
  const dispatch = useAppDispatch();

  const handleGetPaymentsBooksForUserThunk = useCallback(
    () => dispatch(getPaymentsBooksForUserThunk()).unwrap(),
    [dispatch]
  );

  const handleGetPayments = useCallback(
    (filter = null) => dispatch(getPaymentsThunk(filter)).unwrap(),
    [dispatch]
  );

  const handlePayBook = (data) => dispatch(payBookThunk(data));

  return {
    handleGetPaymentsBooksForUserThunk,
    handleGetPayments,
    handlePayBook,
  };
};
