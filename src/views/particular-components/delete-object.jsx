import { useCategory } from "@/hooks/redux/useCategory";

export const DeleteObject = ({ uid, handleOpen }) => {
  const { handledeleteCategoryThunk } = useCategory();
  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        <h6 className="text-2xl font-semibold text-center">
          Estas seguro que deseas eliminar el objeto?
        </h6>
        <div className="flex items-center justify-between gap-4  pt-4 mt-10 mx-48">
          <button
            className="bg-black-500 py-1.5 px-4 rounded-xl"
            onClick={() => handleOpen()}
          >
            <span className="text-primary font-semibold">Cancelar</span>
          </button>
          <button
            onClick={() => {
              handledeleteCategoryThunk(uid), handleOpen();
            }}
            className="bg-primary py-1.5 px-4 rounded-xl"
          >
            <span className="text-black-500 font-semibold">Aceptar</span>
          </button>
        </div>
      </div>
    </>
  );
};
