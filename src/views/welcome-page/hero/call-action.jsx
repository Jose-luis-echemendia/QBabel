export const CallAction = () => {
  return (
    <>
      <span className="flex justify-center mt-14 font-inter font-extrabold text-shadow text-shadow-y-3 text-2xl">
        ¿Te apasiona leer o escribir?
      </span>
      <div className="flex justify-center items-center gap-10 mt-3">
        <button className="bg-black-500 py-4 px-20 rounded-xl">
          <span className="text-primary font-anton font-medium text-2xl">
            Leer
          </span>
        </button>
        <button className="bg-primary py-4 px-20 rounded-xl">
          <span className="text-black-500 font-anton font-medium text-2xl">
            Escribir
          </span>
        </button>
      </div>
    </>
  );
};
