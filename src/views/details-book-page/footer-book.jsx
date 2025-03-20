import { v4 as uuid } from "uuid";

export const CustomFooterBook = ({ book }) => {
  return (
    <>
      <footer className="col-span-4 flex flex-col gap-5 justify-start items-start -mt-10 shadow-2xl shadow-gray-400 py-4 px-6 rounded-2xl">
        <h6 className="font-semibold text-xl">Tabla de contenidos</h6>
        {book.chapters.map((chapter) => (
          <div key={uuid()}> {chapter.name} </div>
        ))}
      </footer>
    </>
  );
};
