import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminCategoriesView = lazy(() => import("@/views/admin-page/admin-categories"));

const AdminCategoriesPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminCategoriesView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminCategoriesPage;
