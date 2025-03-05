import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    users: [],
    loading: false,
}

export const usersSlice = createSlice({
    name : 'users',
    initialState: initialState,
    reducers: {

    }
})

export default usersSlice.reducer