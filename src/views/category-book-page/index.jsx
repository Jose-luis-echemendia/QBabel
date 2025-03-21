import { BestSellers } from "./best-sellers";
import { Categories } from "./categories";
import { CategoryBooks } from "./category-books";

const CategoryBookView = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full">
        <BestSellers/>
        <Categories/>
        <CategoryBooks/>
      </div>
    </>
  );
};

export default CategoryBookView;
