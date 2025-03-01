import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/slice"


export const sotre = configureStore({
    reducer : {
        users: usersReducer
    }
})
