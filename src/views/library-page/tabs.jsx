import { useAppSelector } from "@/hooks/redux/useStore";

export const Tabs = ({ activeTab, setActiveTab }) => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <>
      {" "}
      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-4">
        <div className="flex space-x-7 text-xl">
          {/*
          
          TODDAS TUS HISTORIAS

          */}
          <button
            className={`pb-2 ${
              activeTab === "allStory"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("allStory")}
          >
            Todas tus historias
          </button>
          {/*
          
          HISTORIAS POR LEER

          */}
          <button
            className={`pb-2 ${
              activeTab === "readingStory"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("readingStory")}
          >
            Historias por leer
          </button>
          {/*
          
          HISTORIAS POR COMPRAR

          */}
          <button
            className={`pb-2 ${
              activeTab === "forBuying"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("forBuying")}
          >
            Historias por comprar
          </button>
          {/*
          
          LISTA DE LECTURAS

          */}
          <button
            className={`pb-2 ${
              activeTab === "listReading"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("listReading")}
          >
            Lista de lecturas
          </button>
          {/*
          
          MIS HISTORIAS

          */}
          {user.role !== "Reader" && (
            <button
              className={` pb-2 ${
                activeTab === "myStory"
                  ? "border-b-2 border-primary font-bold text-black"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("myStory")}
            >
              Tus historias
            </button>
          )}

          {/*
          
          HISTORIAS ARCHIVADAS

          */}
          <button
            className={`pb-2 ${
              activeTab === "archiveStory"
                ? "border-b-2 border-primary font-bold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("archiveStory")}
          >
            Historias archivadas
          </button>
        </div>
      </div>
    </>
  );
};
