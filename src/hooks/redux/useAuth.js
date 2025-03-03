import { loginThunk, verifyTokenThunk, refreshTokenThunk, logoutThunk } from "@/store/auth/thunks";
import { useAppDispatch } from "./useStore";
import { logoutLocal } from "@/store/auth/slice";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const handleLogin = ( email, password ) => {
    dispath(loginThunk({ email, password }));
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
    dispath(logoutLocal())
  }

  return { handleLogin, handleVerifyToken, handlRefreshToken, handleLogout, handleLogoutLocal };
};
