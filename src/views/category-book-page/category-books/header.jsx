export const HeaderCategoryBooks = () => {
  return (
    <>
      <header className="flex flex-row items-center justify-between py-10 px-20 w-full">
        <div className="relative w-full flex items-center">
          <div className="h-14 w-14 bg-white-100 rounded-full shadow-2xl" />
          <span className="absolute inline-flex h-full w-full top-4 left-6 font-bold text-gray-100 text-shadow text-xl font-opensans drop-shadow-[2px_2px_0px_black]">
            2k Historias
          </span>
        </div>
        <div className="relative flex items-center h-full w-full font-bold text-shadow text-xl font-opensans">
          <span className="absolute right-7 drop-shadow-[2px_2px_0px_black] text-gray-100">
            Filtrar por: Populares
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute -right-1 -top-2 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </header>
    </>
  );
};
