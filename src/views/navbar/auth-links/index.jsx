import { GetAuthLinks } from "./get-auth-links";
import { CustomAvatar } from "./avatar";
import { useAppSelector } from "@/hooks/redux/useStore";

export const AuthLinks = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <>
      <div>
        {auth.isAuthenticated ? (
          <CustomAvatar
            imageAvatar={auth.profile.avatar_details}
            user={auth.user}
          />
        ) : (
          <GetAuthLinks />
        )}
      </div>
    </>
  );
};
