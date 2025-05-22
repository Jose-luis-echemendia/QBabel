import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AdminLayout from "@/layout/admin-layout";

const AdminBooksView = lazy(() => import("@/views/admin-page/admin-books"));

const AdminBooksPage = () => {
  return (
    <LoadSuspense>
      <AdminLayout>
        <AdminBooksView />
      </AdminLayout>
    </LoadSuspense>
  );
};

export default AdminBooksPage;
