import { BodyCategoryBooks } from "./body-category-books";
import { HeaderCategoryBooks } from "./header-category-books";

export const CategoryBooks = () => {
  return (
    <>
      <section className="container mx-auto bg-[hsl(271,46%,77%)] bg-opacity-55 w-full h-full rounded-xl mt-20 shadow-lg flex flex-col items-center justify-center pb-5">
        <HeaderCategoryBooks />
        <div className="w-full px-10">
          <hr className="w-full mx-auto" />
        </div>
        <BodyCategoryBooks />
        <div className="w-full px-10 mt-7">
          <hr className="w-full mx-auto" />
        </div>
      </section>
    </>
  );
};
