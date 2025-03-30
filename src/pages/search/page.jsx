import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const SearchView = lazy(() => import("@/views/search-page"));

const SearchPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <SearchView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default SearchPage;
