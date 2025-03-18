import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminUserView = lazy(() => import("@/views/admin-page/admin-user"));

const AdminUserPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminUserView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminUserPage;
