import { Decorator } from "./decorator";

export const BestSellers = () => {
  return (
    <>
      <div className="relative w-full h-full flex flex-col items-start justify-start gap-10">
        <h3 className="px-20 ml-5 font-semibold text-xl">Top 10 libros más vendidos</h3>
        <Decorator />
        <div className="absolute">

        </div>
      </div>
    </>
  );
};
