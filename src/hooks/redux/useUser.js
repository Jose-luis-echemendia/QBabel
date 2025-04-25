import {
  getUsersThunk,
  getUserByIdThunk,
  createUserThunk,
  updateUserThunk,
  updatePartialUserThunk,
  deleteUserThunk,
} from "@/store/users/thunks";
import { useAppDispatch } from "./useStore";

export const useUser = () => {
  const dispath = useAppDispatch();

  const handleGetUsers = () => {
    dispath(getUsersThunk());
  };

  const handleGetUserById = (id) => {
    dispath(getUserByIdThunk(id));
  };

  const handleCreateUser = (data) => {
    dispath(createUserThunk(data));
  };

  const handleUpdateUser = (data) => {
    dispath(updateUserThunk(data));
  };

  const handleUpdatePartialUser = (data) => {
    dispath(updatePartialUserThunk(data));
  };

  const handleDeleteUser = (id) => {
    dispath(deleteUserThunk(id));
  };

  return {
    handleGetUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUser,
    handleUpdatePartialUser,
    handleDeleteUser,
  };
};
