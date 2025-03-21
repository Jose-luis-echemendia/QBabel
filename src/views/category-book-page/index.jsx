import { BestSellers } from "./best-sellers";
import { Categories } from "./categories";
import { CategoryBooks } from "./category-books";

const CategoryBookView = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col items-center justify-start px-2 py-10 gap-14 relative">
        <div className="absolute right-1/4 mt-5">
          <h2 className="w-full text-[50px] leading-[55px] font-bold text-center font-italianno">
            Historias de Romances
          </h2>
        </div>
        <div className="mt-44 w-full h-full flex flex-col items-center justify-start">
          <BestSellers />
          <Categories />
          <CategoryBooks />
        </div>
      </div>
    </>
  );
};

export default CategoryBookView;
