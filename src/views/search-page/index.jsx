import { HeaderSearchBooks } from "./header";
import { SectionBooks } from "./section-books";
import { SectionProfiles } from "./section-profiles";
import { useState } from "react";

const SearchView = () => {
  const [activeTab, setActiveTab] = useState("historias");
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col justify-start px-10 py-16 gap-14 relative">
        <HeaderSearchBooks activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="grid grid-cols-10">
          {activeTab === "historias" && <SectionBooks />}
          {activeTab === "perfiles" && <SectionProfiles />}
        </div>
      </div>
    </>
  );
};

export default SearchView;
