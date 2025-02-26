import { CustomImageDecorator } from "@/components/image-decorator";
export const Decorator = () => {
  return (
    <>
      <CustomImageDecorator
        src="/assets/icons/2.svg"
        className="absolute left-0 top-[400px] z-10"
      />
      <CustomImageDecorator
        src="/assets/icons/3.svg"
        className="absolute right-0 z-10 top-[-3px]"
      />
    </>
  );
};
