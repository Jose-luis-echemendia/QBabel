import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"
import authReducer from "./auth/slice"


export const store = configureStore({
    reducer : {
        auth: authReducer,
        users: usersReducer,
    }
})
