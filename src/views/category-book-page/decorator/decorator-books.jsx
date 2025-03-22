import { CustomImageDecorator } from "@/components/image-decorator";
import { memo } from "react";

const DecoratorBooks = () => {
  return (
    <>
      {/* LEFT */}
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/9.webp"
        className="absolute -left-[240px] top-0 z-0 w-[200px] mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/1.webp"
        className="absolute -left-[200px] top-1/2 z-0 w-[200px] mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/6.webp"
        className="absolute -left-[240px] z-0 w-[200px] mt-2"
      />
      {/* RIGHT */}
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/11.jpg"
        className="absolute -right-[200px] top-[100px] z-0 w-[120px] mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/home/explota_talento/8.webp"
        className="absolute -right-[160px] top-[170px] z-0 w-[120px] mt-2"
      />
    </>
  );
};

DecoratorBooks.displayName = "DecoratorBooks";
export default memo(DecoratorBooks);
