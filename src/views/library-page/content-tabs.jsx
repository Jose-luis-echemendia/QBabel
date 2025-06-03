import AllStories from "./allstories";
// Importa tu componente para Reading Lists
import { useEffect } from "react";
import { ReadingListView } from "./reading-view";
import { bestBooksData as books } from "../../constants/home-page/best-books";
import { useLibrary } from "@/hooks/redux/useLibrary";

export const ContentTabs = ({ activeTab }) => {
  const { handleGetLibrary } = useLibrary();

  useEffect(() => {
    if (activeTab === "allStory") {
      handleGetLibrary();
    }
  }, [activeTab]);

  return (
    <>
      {activeTab === "allStory" && (
        <>
          <AllStories />
        </>
      )}
      {activeTab === "readingStory" && (
        <>
          <AllStories />
        </>
      )}
      {activeTab === "forBuying" && (
        <>
          <AllStories />
        </>
      )}
      {activeTab === "listReading" && (
        // Aquí renderizas tu componente para Reading Lists
        <ReadingListView />
      )}
      {activeTab === "myStory" && (
        <>
          <AllStories books={books} />
        </>
      )}
      {activeTab === "archiveStory" && (
        <div className="text-gray-700">Contenido del Archive...</div>
      )}
    </>
  );
};
