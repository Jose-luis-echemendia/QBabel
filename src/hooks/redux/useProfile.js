import {
  getProfilesThunk,
  getProfileByIdThunk,
  updateProfileThunk,
  updatePartialProfileThunk,
  getAuthenticatedUserProfileThunk,
  getProfileByUsernameThunk,
  followerWriterThunk,
} from "@/store/profile/thunks";
import { useAppDispatch } from "./useStore";
import { useCallback } from "react";

export const useProfile = () => {
  const dispath = useAppDispatch();

  const handleGetProfileByUsername = (username) => {
    dispath(getProfileByUsernameThunk(username));
  };

  const handleGetAuthenticatedProfile = () => {
    dispath(getAuthenticatedUserProfileThunk());
  };

  const handleGetProfiles = useCallback(
    (filter = null) => dispath(getProfilesThunk(filter)).unwrap(),
    [dispath]
  );

  const handleGetProfileById = (id) => {
    dispath(getProfileByIdThunk(id));
  };

  const handleUpdateProfile = (data) => {
    dispath(updateProfileThunk(data)).unwrap();
  };

  const handleUpdatePartialProfile = (id, data) => {
    dispath(updatePartialProfileThunk({ id, data })).unwrap();
  };

  const handlefollowerWriter = (data) => {
    dispath(followerWriterThunk(data)).unwrap();
  };

  return {
    handleGetProfileByUsername,
    handleGetAuthenticatedProfile,
    handleGetProfiles,
    handleGetProfileById,
    handleUpdateProfile,
    handleUpdatePartialProfile,
    handlefollowerWriter,
  };
};
