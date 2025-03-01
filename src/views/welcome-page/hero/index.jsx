import { CallAction } from "./call-action";
import { Decorator } from "./decorator";
import { Introduction } from "./introduction";

export const Hero = () => {
  return (
    <>
      <div className="relative pt-10 pb-5 flex flex-row border-b shadow-lg shadow-gray-400">
        <div className="w-1/2 ml-36 mt-24 flex flex-col p-8">
          <Introduction />
          <CallAction />
        </div>
        <Decorator />
      </div>
    </>
  );
};
