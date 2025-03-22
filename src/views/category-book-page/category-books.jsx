import { booksData } from "@/constants/home-page/best-books";

export const CategoryBooks = () => {
  return (
    <>
      <section className="container mx-auto bg-[hsl(271,46%,77%)] w-full h-full rounded-xl mt-20 shadow-lg flex flex-col items-center justify-center">
        <header className="flex flex-row items-center justify-between py-10 px-20 w-full">
          <div className="relative w-full">
            <div className="h-14 w-14 bg-white-100 rounded-full shadow-2xl"/>
            <span className="absolute inline-flex h-full w-full top-5 left-6 font-semibold text-gray-100 text-shadow text-xl">2k Historias</span>
          </div>
          <div>Filtrar por:</div>
        </header>
        <hr />
        <div></div>
      </section>
    </>
  );
};
