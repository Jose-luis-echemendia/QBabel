import {getProfilesAPI, getProfileByIdAPI, updateProfileAPI, updatePartialProfileAPI} from "@/api/profileAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'sonner'

// **thunk for get profiles**
export const getProfilesThunk = createAsyncThunk(
    "profiles/getProfiles",
    async (_, { rejectWithValue }) => {
      try {
        const response = await getProfilesAPI();
        if (response.status === 200) return response.data
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **thunk for get profile by id**
export const getProfileByIdThunk = createAsyncThunk(
  "profiles/getProfileById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProfileByIdAPI(id);
      if (response.status === 200) return response.data
      return rejectWithValue(response?.data); 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for update profile**
export const updateProfileThunk = createAsyncThunk(
    "profiles/updateProfile",
    async (data, { rejectWithValue }) => {
      try {
        const response = await updateProfileAPI(data);
        if (response.status === 200){
          toast.success('Profile updated successfully')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **thunk for partial update profile**
export const updatePartialProfileThunk = createAsyncThunk(
    "profiles/updatePartialProfile",
    async (data, { rejectWithValue }) => {
      try {
        const response = await updatePartialProfileAPI(data);
        if (response.status === 200){
          toast.success('Profile updated successfully')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);


