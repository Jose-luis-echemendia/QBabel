import { getUsersAPI, getUserByIdAPI, createUserAPI, updateUserAPI, updatePartialUserAPI, deleteUserAPI } from "@/api/userAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'sonner'


// **Thunk for get users**
export const getUsersThunk = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
      try {
        const response = await getUsersAPI();
        if (response.status === 200) return response.data
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk for get user by id**
export const getUserByIdThunk = createAsyncThunk(
  "users/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getUserByIdAPI(id);
      if (response.status === 200) return response.data
      return rejectWithValue(response?.data); 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// **Thunk for create user**
export const createUserThunk = createAsyncThunk(
    "users/createUser",
    async (data, { rejectWithValue }) => {
      try {
        const response = await createUserAPI(data);
        if (response.status === 201){
          toast.success('Bienvenido a la comunidad')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk for update user**
export const updateUserThunk = createAsyncThunk(
    "users/updateUser",
    async (data, { rejectWithValue }) => {
      try {
        const response = await updateUserAPI(data);
        if (response.status === 200){
          toast.success('Usuario actualizado correctamente')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk for update partial user**
export const updatePartialUserThunk = createAsyncThunk(
    "users/updatePartialUser",
    async (data, { rejectWithValue }) => {
      try {
        const response = await updatePartialUserAPI(data);
        if (response.status === 200){
          toast.success('Usuario actualizado correctamente')
          return response.data;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

// **Thunk for delete user**
export const deleteUserThunk = createAsyncThunk(
    "users/deleteUser",
    async (id, { rejectWithValue }) => {
      try {
        const response = await deleteUserAPI(id);
        if (response.status === 204){
          toast.success('Usuario eliminado correctamente')
          return id;
        }
        return rejectWithValue(response?.data); 
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);

