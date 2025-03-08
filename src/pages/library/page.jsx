import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const LibraryView = lazy(() => import("@/views/library-page"));

const LibraryPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <LibraryView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default HomePage;
