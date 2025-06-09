import {
  getProfilesAPI,
  getProfileByIdAPI,
  updateProfileAPI,
  updatePartialProfileAPI,
  getAuthenticatedUserProfileAPI,
  getProfileByUsernameAPI,
  followerWriterAPI,
} from "@/api/profileAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "sonner";

export const followerWriterThunk = createAsyncThunk(
  "profiles/followerWriterAPI",
  async (data, { rejectWithValue }) => {
    try {
      const response = await followerWriterAPI(data);
      if (response.status === 201) {
        toast.success("Has empezado a seguir al escritor");
        return response.data;
      }

      return rejectWithValue(response?.data);
    } catch (error) {
      if (
        error.response.status === 400 &&
        error.response.data?.error === "You are already following this writer."
      ) {
        toast.error("Ya sigues a este escritor");
        return error.response.data;
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for get profile by username**
export const getProfileByUsernameThunk = createAsyncThunk(
  "profiles/getProfileByUsername",
  async (username, { rejectWithValue }) => {
    try {
      const response = await getProfileByUsernameAPI(username);
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for get authenticated profile**
export const getAuthenticatedUserProfileThunk = createAsyncThunk(
  "profiles/getAuthenticatedUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAuthenticatedUserProfileAPI();
      if (response.status === 200) return response.data;
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **thunk for get profiles**
export const getProfilesThunk = createAsyncThunk(
  "profiles/getProfiles",
  async (filter = null, { rejectWithValue }) => {
    try {
      const response = await getProfilesAPI(filter);
      if (response.status === 200) return response.data;
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
      if (response.status === 200) return response.data;
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
      if (response.status === 200) {
        //toast.success("Profile updated successfully");
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
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await updatePartialProfileAPI(id, data);
      if (response.status === 200) {
        //toast.success("Profile updated successfully");
        return response.data;
      }
      return rejectWithValue(response?.data);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
