import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminUsersView = lazy(() => import("@/views/admin-page/admin-users"));

const AdminUsersPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminUsersView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminUsersPage;
