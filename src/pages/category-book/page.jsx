import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const CategoryBookView = lazy(() => import("@/views/category-book-page"));

const CategoryBookPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <CategoryBookView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default CategoryBookPage;
