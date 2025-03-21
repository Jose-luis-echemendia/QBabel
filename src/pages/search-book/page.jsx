import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import AuthenticatedLayout from "@/layout/authenticated-layout";

const SearchBookView = lazy(() => import("@/views/search-book-page"));

const SearchBookPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <SearchBookView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default SearchBookPage;
