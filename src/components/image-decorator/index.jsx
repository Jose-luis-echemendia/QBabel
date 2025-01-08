import classNames from "classnames";

export const CustomImageDecorator = ({ src, className }) => {
  return (
    <figure className={classNames(className)}>
      <img
        src={src}
        alt="Image decorator"
        className="w-full h-full object-cover"
      />
    </figure>
  );
};
