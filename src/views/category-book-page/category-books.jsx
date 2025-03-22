import { booksData } from "@/constants/home-page/best-books";

export const CategoryBooks = () => {
  return (
    <>
      <section className="container mx-auto bg-[hsl(271,46%,77%)] w-full h-full rounded-xl mt-20 shadow-lg flex flex-col items-center justify-center">
        <header className="flex justify-between py-10 space-x-20">
          <div className="relative">
            <div className="h-10 w-10 bg-white-100 rounded-full"/>
            <span className="absolute h-full w-full">2k Historias</span>
          </div>
          <div>Filtrar por:</div>
        </header>
        <hr />
        <div></div>
      </section>
    </>
  );
};
