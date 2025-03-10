import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";

const BookReaderView = lazy(() => import("@/views/book-reader-page"));

const BookReaderPage = () => {
  return (
    <LoadSuspense>
      <BookReaderView />
    </LoadSuspense>
  );
};

export default BookReaderPage;
