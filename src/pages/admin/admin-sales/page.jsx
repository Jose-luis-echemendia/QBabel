import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminSalesView = lazy(() => import("@/views/admin-page/admin-sales"));

const AdminSalesPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminSalesView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminSalesPage;
