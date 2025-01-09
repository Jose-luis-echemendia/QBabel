import CustomButton from "@/components/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Progress } from "@material-tailwind/react";

export const Controls = () => {
  return (
    <>
      <div className="flex flex-row gap-5 ml-6 -mt-6">
        <CustomButton
          IconCenter={ChevronLeftIcon}
          className="p-5 h-14 w-14 rounded-full bg-transparent text-white border border-white/50 flex-grow-0  hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
        />
        <CustomButton
          IconCenter={ChevronRightIcon}
          className="p-5 h-14 w-14 rounded-full bg-white/50 text-black  flex-grow-0 hover:shadow-xl hover:shadow-white/50 hover:translate-y-[-2px] transition-transform duration-300"
        />
        <Progress  value={25} size="sm" variant="gradient" color="red"/>
      </div>
    </>
  );
};
