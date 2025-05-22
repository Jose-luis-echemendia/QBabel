import { useEffect } from "react";

import { HeroProfile } from "./hero-profile";
import { TabsMenu } from "./tabs-menu";
import { useParams } from "react-router-dom";
import { useProfile } from "@/hooks/redux/useProfile";

const ProfileView = () => {
  const { userName } = useParams();
  const { handleGetProfileByUsername } = useProfile();

  useEffect(() => {
    handleGetProfileByUsername(userName);
  }, [userName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <HeroProfile />

      <div className="w-full  mt-4">
        <TabsMenu />
      </div>
    </div>
  );
};

export default ProfileView;
