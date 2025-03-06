import { GetAuthLinks } from "./get-auth-links";
import { CustomAvatar } from "./avatar";
import { useAppSelector } from "@/hooks/redux/useStore";
import { AvatarDropdown } from "@/components/avatar/AvatarDropdown";

export const AuthLinks = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <>
      <AvatarDropdown/>
      <div>{auth.isAuthenticated ? <CustomAvatar/> : <GetAuthLinks/>}</div>
    </>
  );
};
