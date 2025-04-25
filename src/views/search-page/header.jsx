

export const HeaderSearchBooks = ({activeTab, setActiveTab}) => {
  

  return (
    <div className="flex items-start justify-between border-b border-gray-200 mb-4">
      <div className="flex space-x-7 text-4xl">
        <button
          className={`pb-2 ${
            activeTab === "historias"
              ? "border-b-2 border-primary font-semibold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("historias")}
        >
          Historias
        </button>
        <button
          className={`pb-2 ${
            activeTab === "perfiles"
              ? "border-b-2 border-primary font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("perfiles")}
        >
          Perfiles
        </button>
      </div>
    </div>
  );
};
