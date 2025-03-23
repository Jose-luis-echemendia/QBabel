import { useState } from "react";

export const HeaderSearchBooks = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
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
          Historias
        </button>
        <button
          className={`pb-2 ${
            activeTab === "archive"
              ? "border-b-2 border-primary font-bold"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("archive")}
        >
          Perfiles
        </button>
      </div>
    </div>
  );
};
