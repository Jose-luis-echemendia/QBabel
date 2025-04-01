import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminComplaintsView = lazy(() => import("@/views/admin-page/admin-complaints"));

const AdminComplaintsPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminComplaintsView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminComplaintsPage;
