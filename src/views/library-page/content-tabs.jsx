import AllStories from "./allstories";
// Importa tu componente para Reading Lists
import { ReadingListView } from "./reading-view";
import { bestBooksData as books } from "../../constants/home-page/best-books";

export const ContentTabs = ({ activeTab }) => {
  return (
    <>
      {activeTab === "current" && (
        <>
          <h3 className="text-xl font-bold mb-7 mt-6">Todas tus historias</h3>
          <AllStories books={books} />
        </>
      )}

      {activeTab === "archive" && (
        <div className="text-gray-700">Contenido del Archive...</div>
      )}

      {activeTab === "reading" && (
        // Aquí renderizas tu componente para Reading Lists
        <ReadingListView />
      )}
      {activeTab === "books" && (
        <>
          <h3 className="text-xl font-bold mb-7 mt-6">Tus historias</h3>
          <AllStories books={books} />
        </>
      )}
    </>
  );
};
