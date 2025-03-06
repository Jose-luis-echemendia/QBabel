import {
  getProfilesThunk,
  getProfileByIdThunk,
  updateProfileThunk,
  updatePartialProfileThunk,
} from "@/store/profile/thunks";
import { useAppDispatch } from "./useStore";

export const useProfile = () => {
  const dispath = useAppDispatch();

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
    handleGetProfiles,
    handleGetProfileById,
    handleUpdateProfile,
    handleUpdatePartialProfile,
  };
};
