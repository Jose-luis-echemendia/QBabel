import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice";
import authReducer from "./auth/slice";
import categoryReducer from "./category/slice";
import profileReducer from "./profile/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    profile: profileReducer,
    category: categoryReducer,
  },
});
