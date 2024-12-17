import { GetAuthLinks } from "./get-auth-links";

export const AuthLinks = () => {
  const authenticated = false;
  return (
    <>
      <div>{authenticated ? <>avatar</> : <GetAuthLinks/>}</div>
    </>
  );
};
