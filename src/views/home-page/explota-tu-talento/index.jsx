import { NarrativeSteps } from './narrative-steps';
import { ImagesDataWaterfallBook } from './images-data-waterfall';

export const ExploitYourTalent = () => {
  return (
    <div className="w-full h-[740px] relative bg-primary p-1 bg-opacity-50">
      <h2 className="text-center italic  text-[40px] font-bold font-inter mt-36  ">
        Explota tu talento
      </h2>

      <div className=" flex relative justify-center">
        <NarrativeSteps />
      </div>

      <img
        src="/assets/images/home/explota_talento/Vector (2).png"
        alt=""
        className="absolute bottom-48"
      />
      <ImagesDataWaterfallBook />
    </div>
  );
};
