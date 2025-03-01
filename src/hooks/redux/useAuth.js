import { login } from "@/store/auth/slice";
import { useAppDispatch } from "./useStore";

export const useAuth = () => {
  const dispath = useAppDispatch();

  const handleLogin = ( email, password ) => {
    console.log("use auth", email, password)
    dispath(login({ email, password }));
  };

  return { handleLogin };
};
