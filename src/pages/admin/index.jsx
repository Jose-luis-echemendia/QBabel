import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";
import CustomSidebar from "@/views/navbar/sidebar";

const AdminView = lazy(() => import("@/views/admin"));

const AdminPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <div className="grid grid-cols-12">
          <CustomSidebar />
          <AdminView />
        </div>
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default AdminPage;
