import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const ActiveView = lazy(() => import("@/views/auth/activate"));

const ActivePage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <ActiveView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default ActivePage;
