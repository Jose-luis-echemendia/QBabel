import {
  getProfilesThunk,
  getProfileByIdThunk,
  updateProfileThunk,
  updatePartialProfileThunk,
  getAuthenticatedUserProfileThunk,
  getProfileByUsernameThunk,
} from "@/store/profile/thunks";
import { useAppDispatch } from "./useStore";

export const useProfile = () => {
  const dispath = useAppDispatch();

  const handleGetProfileByUsername = (username) => {
    dispath(getProfileByUsernameThunk(username));
  };

  const handleGetAuthenticatedProfile = () => {
    dispath(getAuthenticatedUserProfileThunk());
  };

  const handleGetProfiles = () => {
    dispath(getProfilesThunk());
  };

  const handleGetProfileById = (id) => {
    dispath(getProfileByIdThunk(id));
  };

  const handleUpdateProfile = (data) => {
    dispath(updateProfileThunk(data));
  };

  const handleUpdatePartialProfile = (data) => {
    dispath(updatePartialProfileThunk(data));
  };

  return {
    handleGetProfileByUsername,
    handleGetAuthenticatedProfile,
    handleGetProfiles,
    handleGetProfileById,
    handleUpdateProfile,
    handleUpdatePartialProfile,
  };
};
