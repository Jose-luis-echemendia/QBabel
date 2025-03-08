import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const AdminView = lazy(() => import("@/views/admin-page"));
const SidebarView = lazy(() => import("@/views/navbar/sidebar"));

const AdminPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <div className="grid grid-cols-12">
          <SidebarView />
          <AdminView />
        </div>
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default AdminPage;
