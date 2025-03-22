import { CustomImageDecorator } from "@/components/image-decorator";
import { memo } from "react";

const DecoratorBooks = () => {
  return (
    <>
      {/* LEFT */}
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/9.webp"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/1.webp"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/6.webp"
        className="absolute z-0 w-full mt-2"
      />
      {/* RIGHT */}
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/11.jpg"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/8.webp"
        className="absolute z-0 w-full mt-2"
      />
    </>
  );
};

DecoratorBooks.displayName = "DecoratorBooks";
export default memo(DecoratorBooks);
