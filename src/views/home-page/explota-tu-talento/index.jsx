import { WaterfallBooks } from "./waterfall-books";
import { NarrativeSteps } from "./narrative-steps";

export const ExploitYourTalent = () => {
  return (
    <div className="w-full h-[740px] relative bg-primary p-1 bg-opacity-50">
      <h2 className="text-center text-[40px] font-bold font-inter mt-36  ">
        Explota tu talento
      </h2>

      <div className="flex  justify-center">
        <NarrativeSteps />
      </div>

      <img
        src="public/assets/images/home/explota_talento/Vector (2).png"
        alt=""
      />
      <WaterfallBooks />
    </div>
  );
};
