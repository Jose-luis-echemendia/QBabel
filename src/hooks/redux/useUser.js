import {
  getUsersThunk,
  getUserByIdThunk,
  createUserThunk,
  updateUserThunk,
  updatePartialUserThunk,
  deleteUserThunk,
} from "@/store/users/thunks";
import { useAppDispatch } from "./useStore";
import { removeCreatedUser } from "@/store/users/slice";

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

  const handleRemoveCreatedUser = () => {
    dispath(removeCreatedUser());
  };

  return {
    handleRemoveCreatedUser,
    handleGetUsers,
    handleGetUserById,
    handleCreateUser,
    handleUpdateUser,
    handleUpdatePartialUser,
    handleDeleteUser,
  };
};
