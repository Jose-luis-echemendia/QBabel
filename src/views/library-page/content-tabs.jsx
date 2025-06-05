import Stories from "./stories";
// Importa tu componente para Reading Lists
import { useEffect } from "react";
import { ReadingListView } from "./reading-view";
import { useLibrary } from "@/hooks/redux/useLibrary";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useBook } from "@/hooks/redux/useBook";

export const ContentTabs = ({ activeTab }) => {
  const items = useAppSelector((state) => state.library.items);
  const mybooks = useAppSelector((state) => state.book.books?.results?.books);
  const { handleGetItemsOfLIbraryThunk } = useLibrary();
  const { handleGetBooks } = useBook();

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
  }, [activeTab]);

  return (
    <>
      {activeTab === "allStory" && (
        <>
          <Stories items={items?.results?.items} />
        </>
      )}
      {activeTab === "readingStory" && (
        <>
          <Stories items={items?.results?.items} seeBuy={false} />
        </>
      )}
      {activeTab === "forBuying" && (
        <>
          <Stories items={items?.results?.items} />
        </>
      )}
      {activeTab === "listReading" && (
        // Aquí renderizas tu componente para Reading Lists
        <ReadingListView />
      )}
      {activeTab === "myStory" && (
        <>
          <Stories mybooks={mybooks} seeBuy={false} seeArchive={false} />
        </>
      )}
      {activeTab === "archiveStory" && (
        <div className="text-gray-700">Contenido del Archive...</div>
      )}
    </>
  );
};
