import { CustomImageDecorator } from "@/components/image-decorator";

export const DecoratorBooks = () => {
  return (
    <>
      {/* LEFT */}
      <CustomImageDecorator
        src="/assets/images/books/1.png"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/books/1.png"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/books/1.png"
        className="absolute z-0 w-full mt-2"
      />
      {/* RIGHT */}
      <CustomImageDecorator
        src="/assets/images/books/1.png"
        className="absolute z-0 w-full mt-2"
      />
      <CustomImageDecorator
        src="/assets/images/books/1.png"
        className="absolute z-0 w-full mt-2"
      />
    </>
  );
};
