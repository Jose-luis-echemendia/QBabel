import { createSlice } from "@reduxjs/toolkit";
import {
    getProfilesThunk,
    getProfileByIdThunk,
    updateProfileThunk,
    updatePartialProfileThunk,
    getAuthenticatedUserProfileThunk
} from "./thunks"

const initialState = {
    profile : null,
    count: 0,
    next: null,
    previous: null,
    profiles: [],
    loading: false,
}

export const profileSlice = createSlice({
    name : 'profile',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        
    }
})

export default profileSlice.reducer