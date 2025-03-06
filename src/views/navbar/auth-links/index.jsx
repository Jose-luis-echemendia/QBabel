import { GetAuthLinks } from "./get-auth-links";
import { Avatar } from "./avatar";
import { useAppSelector } from "@/hooks/redux/useStore";

export const AuthLinks = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <>
      <div>{auth.isAuthenticated ? <Avatar/> : <GetAuthLinks/>}</div>
    </>
  );
};
