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