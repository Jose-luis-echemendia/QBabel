import { createSlice } from "@reduxjs/toolkit";
import {
    getUsersThunk,
    getUserByIdThunk,
    createUserThunk,
    updateUserThunk,
    updatePartialUserThunk,
    deleteUserThunk
} from "./thunks"

const initialState = {
    user : null,
    count: 0,
    next: null,
    previous: null,
    users: [],
    loading: false,
}

export const usersSlice = createSlice({
    name : 'users',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        // **Get users reducers**
            .addCase(getUsersThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsersThunk.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getUsersThunk.rejected, (state) => {
                state.loading = false
            })
        
        // **Get user by id reducers**
            .addCase(getUserByIdThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(getUserByIdThunk.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addCase(getUserByIdThunk.rejected, (state) => {
                state.loading = false
            })
        
        // **Create user reducers**
            .addCase(createUserThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(createUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.users.push(action.payload)
            })
            .addCase(createUserThunk.rejected, (state) => {
                state.loading = false
            })
        
        // **Update user reducers**
            .addCase(updateUserThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
            })
            .addCase(updateUserThunk.rejected, (state) => {
                state.loading = false
            })
        
        // **Update partial user reducers**
            .addCase(updatePartialUserThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(updatePartialUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user)
            })
            .addCase(updatePartialUserThunk.rejected, (state) => {
                state.loading = false
            })

        // **Delete user reducers**
            .addCase(deleteUserThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteUserThunk.fulfilled, (state, action) => {
                state.loading = false
                state.users = state.users.filter(user => user.id !== action.payload)
            })
            .addCase(deleteUserThunk.rejected, (state) => {
                state.loading = false
            })
    }
})

export default usersSlice.reducer