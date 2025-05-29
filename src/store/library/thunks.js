import { getLIbraryAPI, addBookToLibraryAPI, disaggregateBookFromLibraryAPI  } from "@/api/libraryAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLibraryThunk = createAsyncThunk(
    "library/getLibrary",
    async (_, { rejectWithValue }) => {
        try {
        const response = await getLIbraryAPI();
        if (response.status === 200) return response.data;
        return rejectWithValue(response?.data);
        } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const addBookToLibraryThunk = createAsyncThunk(
    "library/addBookToLibrary",
    async (data, { rejectWithValue }) => {
        try {
        const response = await addBookToLibraryAPI(data);
        if (response.status === 200) return response.data;
        return rejectWithValue(response?.data);
        } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
        }
    }
);


export const disaggregateBookFromLibraryThunk = createAsyncThunk(
    "library/disaggregateBookFromLibrary",
    async (id, { rejectWithValue }) => {
        try {
        const response = await disaggregateBookFromLibraryAPI(id);
        if (response.status === 200) return response.data;
        return rejectWithValue(response?.data);
        } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
        }
    }
);