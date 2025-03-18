import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const DetailsBookView = lazy(() => import("@/views/details-book-page"));

const DetailsBookPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <DetailsBookView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default DetailsBookPage;
