import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const AdminView = lazy(() => import("@/views/admin-page"));
const SidebarView = lazy(() => import("@/views/navbar/sidebar"));

const AdminPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <div className="grid grid-cols-12 ml-10 mt-5 rounded-xl">
          <div className="col-span-2 -ml-3">
            <SidebarView />
          </div>
          <div className="col-span-10 relative -mt-1">
            <AdminView />
            <div className="absolute bg-gray-50 w-full h-20 -bottom-20 z-[-1]" />
          </div>
        </div>
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default AdminPage;
