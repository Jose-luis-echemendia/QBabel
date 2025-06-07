import Stories from "./stories";
// Importa tu componente para Reading Lists
import { useEffect } from "react";
import { ReadingListView } from "./reading-view";
import { useLibrary } from "@/hooks/redux/useLibrary";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useBook } from "@/hooks/redux/useBook";
import { usePayment } from "@/hooks/redux/usePayment";
import { LoadingCardBookLibrary } from "../loading/card-book-library";

export const ContentTabs = ({ activeTab }) => {
  const items = useAppSelector((state) => state.library.items);
  const mybooks = useAppSelector((state) => state.book.books?.results?.books);
  const { handleGetPaymentsBooksForUserThunk } = usePayment();
  const { handleGetItemsOfLIbraryThunk } = useLibrary();
  const { handleGetBooks } = useBook();

  const loadingLibrary = useAppSelector((state) => state.library.loading);
  const loadingBooks = useAppSelector((state) => state.library.loading);

  useEffect(() => {
    if (activeTab === "allStory") {
      handleGetItemsOfLIbraryThunk();
    } else if (activeTab === "readingStory") {
      handleGetItemsOfLIbraryThunk({ is_sold: true });
    } else if (activeTab === "forBuying") {
      handleGetItemsOfLIbraryThunk({ is_sold: false });
    } else if (activeTab === "listReading") {
      handleGetItemsOfLIbraryThunk();
    } else if (activeTab === "myStory") {
      handleGetBooks({ me: true });
    } else if (activeTab === "archiveStory") {
      handleGetItemsOfLIbraryThunk();
    }
    handleGetPaymentsBooksForUserThunk();
  }, [activeTab]);

  return (
    <>
      {activeTab === "allStory" && (
        <>
          {loadingLibrary || loadingBooks ? (
            <LoadingCardBookLibrary />
          ) : (
            <Stories items={items?.results?.items} />
          )}
        </>
      )}
      {activeTab === "readingStory" && (
        <>
          {loadingLibrary || loadingBooks ? (
            <LoadingCardBookLibrary />
          ) : (
            <Stories items={items?.results?.items} />
          )}
        </>
      )}
      {activeTab === "forBuying" && (
        <>
          {loadingLibrary || loadingBooks ? (
            <LoadingCardBookLibrary />
          ) : (
            <Stories items={items?.results?.items} />
          )}
        </>
      )}
      {activeTab === "listReading" && (
        <>
          {loadingLibrary || loadingBooks ? (
            <LoadingCardBookLibrary />
          ) : (
            <ReadingListView />
          )}
        </>
      )}
      {activeTab === "myStory" && (
        <>
          {loadingLibrary || loadingBooks ? (
            <LoadingCardBookLibrary />
          ) : (
            <Stories mybooks={mybooks} seeArchive={false} />
          )}
        </>
      )}
      {activeTab === "archiveStory" && (
        <div className="text-gray-700">Contenido del Archive...</div>
      )}
    </>
  );
};
