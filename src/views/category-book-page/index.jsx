import { BestSellers } from "./best-sellers";
import { Categories } from "./categories";
import { CategoryBooks } from "./category-books";

const CategoryBookView = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col items-center justify-start px-2 py-10 gap-14 relative">
        <h2 className="text-3xl font-bold text-center font-italianno">Historias de Romances</h2>
        <h2 className="font-italianno mx-auto w-fit mt-2 text-[50px] leading-[55px] text-center">Historias de Romances</h2>
        <BestSellers/>
        <Categories/>
        <CategoryBooks/>
      </div>
    </>
  );
};

export default CategoryBookView;
