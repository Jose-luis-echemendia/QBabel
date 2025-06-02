export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {" "}
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-4">
        <div className="flex space-x-6 text-xl">
          <button
            className={`pb-2 ${
              activeTab === "current"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("current")}
          >
            Lecturas actuales
          </button>
          <button
            className={`pb-2 ${
              activeTab === "archive"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("archive")}
          >
            Archivados
          </button>
          <button
            className={`pb-2 ${
              activeTab === "reading"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reading")}
          >
            Lista de lecturas
          </button>
          <button
            className={` pb-2 ${
              activeTab === "books"
                ? "border-b-2 border-primary font-bold text-black"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("books")}
          >
            Tus libros
          </button>
        </div>
      </div>
    </>
  );
};
