import { HeaderSearchBooks } from "./header";

const SearchView = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col justify-start px-10 py-16 gap-14 relative">
        <HeaderSearchBooks/>
        <div className="grid grid-cols-10">
          <div className="col-span-2 w-full h-full bg-red-200">dsf</div>
          <div className="col-span-8 w-full h-full bg-red-800"></div>
        </div>
      </div>
    </>
  );
};

export default SearchView;
