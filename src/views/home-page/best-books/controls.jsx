import CustomButton from "@/components/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Progress } from "./Progress";

export const Controls = ({currentIndex, length }) => {
  return (
    <div className="flex flex-row gap-4 ml-6 -mt-5 items-center">
      {/* Botones */}
      <CustomButton
        IconCenter={ChevronLeftIcon}
        className="p-5 h-14 w-14 rounded-full bg-transparent text-white border border-white/50 flex-grow-0  hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
      />
      <CustomButton
        IconCenter={ChevronRightIcon}
        className="p-5 h-14 w-14 rounded-full bg-white/50 text-black  flex-grow-0 hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
      />
      <Progress currentIndex={currentIndex} length={length} />
    </div>
  );
};
