import { loginThunk } from "@/store/auth/thunks";
import { useAppDispatch } from "./useStore";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const handleLogin = ( email, password ) => {
    dispath(loginThunk({ email, password }));
  };

  return { handleLogin };
};
