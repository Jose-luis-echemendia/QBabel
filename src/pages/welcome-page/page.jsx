import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import CustomLayout from "@/layout/custom-layout";

const WelcomeView = lazy(() => import("@/views/welcome-page"));

const WelcomePage = () => {
  return (
    <LoadSuspense>
      <CustomLayout>
        <WelcomeView />
      </CustomLayout>
    </LoadSuspense>
  );
};

export default WelcomePage;
