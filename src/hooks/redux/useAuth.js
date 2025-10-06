import {
  activeAccountThunk,
  loginThunk,
  getAuthenticatedUserThunk,
  getAuthenticatedUserProfileThunk,
  verifyTokenThunk,
  refreshTokenThunk,
  logoutThunk,
} from "@/store/auth/thunks";
import { useAppDispatch } from "./useStore";
import {
  logoutLocal,
  avtiveAccount,
  removeAvtiveAccount,
  avtiveStatementRead,
  removeStatementRead,
} from "@/store/auth/slice";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const handleActiveAccountThunk = ({ userID, token, activationCode }) => {
    dispath(activeAccountThunk({ userID, token, activationCode }));
  };

  const handleLogin = ({ email, password }) => {
    dispath(loginThunk({ email, password }));
  };

  const handleGetAuthenticatedUser = () => {
    dispath(getAuthenticatedUserThunk());
  };

  const handleGetAuthenticatedUserProfile = () => {
    dispath(getAuthenticatedUserProfileThunk()).unwrap();
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

  const handleAvtiveAccount = () => {
    dispath(avtiveAccount());
  };

  const handleRemoveAvtiveAccount = () => {
    dispath(removeAvtiveAccount());
  };

  const handleAvtiveStatementRead = () => {
    dispath(avtiveStatementRead());
  };

  const handleRemoveStatementRead = () => {
    dispath(removeStatementRead());
  };

  return {
    handleActiveAccountThunk,
    handleLogin,
    handleGetAuthenticatedUser,
    handleGetAuthenticatedUserProfile,
    handleVerifyToken,
    handlRefreshToken,
    handleLogout,
    handleLogoutLocal,
    handleAvtiveAccount,
    handleRemoveAvtiveAccount,
    handleAvtiveStatementRead,
    handleRemoveStatementRead,
  };
};
