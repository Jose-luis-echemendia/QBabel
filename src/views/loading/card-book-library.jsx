export const LoadingCardBookLibrary = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-9 px-3 pt-3 mt-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse h-[340px] rounded-xl w-full"
          ></div>
        ))}
      </div>
    </>
  );
};
