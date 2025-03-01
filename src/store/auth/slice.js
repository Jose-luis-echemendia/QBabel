import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true,
    jwtTokenAccess: null,
    jwtTokenRefresh: null,
    user:{}
}

export const authSlice = createSlice({
    name : 'auth',
    initialState: initialState,
    reducers: {

    }
})

export default authSlice.reducer