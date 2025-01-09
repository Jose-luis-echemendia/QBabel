import CustomButton from "@/components/button";

export const Controls = () => {
  return (
    <>
      <div className="flex flex-row gap-5">
        <CustomButton
          name="anterior"
          className="p-5 h-0 rounded-full bg-transparent text-white border border-white/50 flex-grow-0  hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
        />
        <CustomButton
          name="siguiente"
          className="p-5 h-0 rounded-full bg-white/50 text-black  flex-grow-0 hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
        />
      </div>
    </>
  );
};
