import { lazy } from "react";
import LoadSuspense from "@/components/load-suspense";
import { pdfjs } from "react-pdf";
import AuthenticatedLayout from "@/layout/authenticated-layout";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const BookReaderView = lazy(() => import("@/views/book-reader-page"));

const BookReaderPage = () => {
  return (
    <LoadSuspense>
      <AuthenticatedLayout>
        <BookReaderView />
      </AuthenticatedLayout>
    </LoadSuspense>
  );
};

export default BookReaderPage;
