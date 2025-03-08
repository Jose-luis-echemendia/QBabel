import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const HomeView = lazy(() => import("@/views/home-page"));

const HomePage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <HomeView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default HomePage;
