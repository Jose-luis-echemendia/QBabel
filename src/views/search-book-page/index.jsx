import { HeaderSearchBooks } from "./header";

const SearchBookView = () => {
  return (
    <>
      <div className="min-h-screen h-full w-full flex flex-col items-center justify-start px-2 py-10 gap-14 relative">
        <HeaderSearchBooks/>
      </div>
    </>
  );
};

export default SearchBookView;
