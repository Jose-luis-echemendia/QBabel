import { CustomImageDecorator } from "@/components/image-decorator";
export const Decorator = () => {
  return (
    <>
      <CustomImageDecorator
        src="/assets/icons/Vector1.svg"
        className="absolute left-0 top-[25px] w-[160px]"
      />
      <CustomImageDecorator
        src="/assets/icons/Vector2.svg"
        className="absolute right-0 top-[300px] w-[300px] z-10"
      />
      <div className="w-1/2 relative flex items-center justify-center">
        <img
          src="/assets/images/home/hero/image1.png"
          alt=""
          className="absolute mb-10 z-20 w-[600px] h-[670px]"
        />
        <img
          src="/assets/images/home/hero/image2.png"
          alt=""
          className="absolute z-10"
        />
      </div>
    </>
  );
};
