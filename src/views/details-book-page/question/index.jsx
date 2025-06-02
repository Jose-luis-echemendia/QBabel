import { Navigate } from "react-router-dom";

export const Question = ({ handleOpen, handleAddLibraryAndRead }) => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-3 p-5">
        <span className="text-2xl font-semibold text-center">
          ¿Deseas agregar el libro a tu biblioteca?
        </span>
        <div className="w-1/2 flex items-center justify-around gap-4 pt-4">
          <button
            className="bg-black-500 py-1 px-7 rounded-xl"
            onClick={handleOpen}
          >
            <span className="text-primary font-semibold text-xl">No</span>
          </button>
          <button
            className="bg-primary py-1 px-7 rounded-xl"
            onClick={handleAddLibraryAndRead}
          >
            <span className="text-black-500 font-semibold text-xl">Sí</span>
          </button>
        </div>
      </div>
    </>
  );
};
