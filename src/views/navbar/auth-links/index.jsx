import { GetAuthLinks } from "./get-auth-links";
import { CustomAvatar } from "./avatar";
import { useAppSelector } from "@/hooks/redux/useStore";

export const AuthLinks = () => {
  const auth = useAppSelector((state) => state.auth);
  return <>{auth.isAuthenticated ? <CustomAvatar /> : <GetAuthLinks />}</>;
};
