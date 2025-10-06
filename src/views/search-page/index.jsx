import { HeaderSearchBooks } from "./header";
import { SectionBooks } from "./section-books";
import { SectionProfiles } from "./section-profiles";
import { useEffect, useState } from "react";
import { useBook } from "@/hooks/redux/useBook";
import { useParams } from "react-router-dom";
import { useProfile } from "@/hooks/redux/useProfile";

const SearchView = () => {
  const [activeTab, setActiveTab] = useState("historias");
  const { handleGetBooks } = useBook();
  const { handleGetProfiles } = useProfile();
  const { criterion } = useParams();

  useEffect(() => {
    handleGetBooks({ title: criterion });
    handleGetProfiles({ user_name: criterion });
  }, [criterion]);

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
