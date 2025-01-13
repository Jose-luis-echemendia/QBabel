import { NarrativeSteps } from './narrative-steps';
import { ImagesDataWaterfallBook } from './images-data-waterfall';

export const ExploitYourTalent = () => {
  return (
    <section
      className="w-full h-[700px] relative z-0 bg-primary p-1 bg-opacity-50"
      aria-labelledby="exploit-your-talent"
    >
      <h2
        id="exploit-your-talent"
        className="text-center italic text-[40px] font-bold font-inter mt-24"
      >
        Explota tu talento
      </h2>

      <NarrativeSteps />

      <img
        src="/assets/images/home/explota_talento/Vector (2).png"
        alt="Decoración - Vector"
        className="absolute bottom-32 w-[160px]"
      />
      <ImagesDataWaterfallBook />
    </section>
  );
};
