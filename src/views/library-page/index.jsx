import { bestBooksData } from "../../constants/home-page/best-books";
import LibrarySection from "./library-section";

const LibraryView = () => {
  return (
    <div className="min-h-screen h-full py-10">
      <LibrarySection books={bestBooksData} />
    </div>
  );
};

export default LibraryView;
