export const CategoriesModal = () => {
  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center">
        <div>categorias</div>
        <div className="flex  gap-10">
          <button className="bg-black-500 py-2 px-10 rounded-xl">
            <span className="text-primary font-anton font-medium">Aceptar</span>
          </button>
          <button className="bg-primary py-2 px-10 rounded-xl">
            <span className="text-black-500 font-anton font-medium">
              Cancelar
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
