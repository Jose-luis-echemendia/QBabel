import {
  loginThunk,
  getAuthenticatedUserThunk,
  getAuthenticatedUserProfileThunk,
  verifyTokenThunk,
  refreshTokenThunk,
  logoutThunk,
} from "@/store/auth/thunks";
import { useAppDispatch } from "./useStore";
import { logoutLocal } from "@/store/auth/slice";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const handleLogin = (email, password) => {
    dispath(loginThunk({ email, password }));
  };

  const handleGetAuthenticatedUser = () => {
    dispath(getAuthenticatedUserThunk());
  };

  const handleGetAuthenticatedUserProfile = () => {
    dispath(getAuthenticatedUserProfileThunk());
  };

  const handleVerifyToken = () => {
    dispath(verifyTokenThunk());
  };
  const handlRefreshToken = () => {
    dispath(refreshTokenThunk());
  };
  const handleLogout = () => {
    dispath(logoutThunk());
  };

  const handleLogoutLocal = () => {
    dispath(logoutLocal());
  };

  return {
    handleLogin,
    handleGetAuthenticatedUser,
    handleGetAuthenticatedUserProfile,
    handleVerifyToken,
    handlRefreshToken,
    handleLogout,
    handleLogoutLocal,
  };
};
