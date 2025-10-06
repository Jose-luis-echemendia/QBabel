export const LoadingHeaderBook = () => {
  return (
    <>
      <div className="bg-white lg:w-full w-[400px] lg:h-[350px] h-full flex items-center justify-center border-b shadow-2xl lg:-mt-0 -mt-6 py-4">
        <div className="flex lg:flex-row flex-col lg:gap-5 items-center justify-center w-full h-full">
          <div className="bg-gray-200 w-[200px] animate-pulse h-full rounded-2xl"></div>
          <div className="flex flex-col gap-10">
            <div className="bg-gray-200 w-full h-10 animate-pulse rounded-full"></div>
            <div className="flex gap-2">
              <div className="bg-gray-200 w-32 h-20 animate-pulse rounded-full"></div>
              <div className="bg-gray-200 w-32 h-20 animate-pulse rounded-full"></div>
              <div className="bg-gray-200 w-32 h-20 animate-pulse rounded-full"></div>
            </div>
            <div className="flex gap-0.5">
              <div className="bg-gray-200 w-2/3 h-14 animate-pulse rounded-l-full"></div>
              <div className="bg-gray-200 w-1/3 h-14 animate-pulse rounded-r-full"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
