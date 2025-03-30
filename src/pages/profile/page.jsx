import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const ProfileView = lazy(() => import("@/views/profile-page"));

const ProfilePage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <ProfileView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default ProfilePage;
