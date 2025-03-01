import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"
import authReducer from "./auth/slice"


export const sotre = configureStore({
    reducer : {
        auth: authReducer,
        users: usersReducer,
    }
})
