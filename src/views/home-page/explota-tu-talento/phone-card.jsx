import PropTypes from "prop-types";

export const PhoneCard = ({
  number,
  title,
  description,
  span,
  bg,
  textColorSpan,
}) => {
  return (
    <>
      <div className="bg-transparent mt-8  relative pt-8">
        <div
          className={`absolute z-[80]  top-12 h-[462px]  rounded-lg left-5 w-[225px] ${bg}`}
        >
          <div className="flex  w-fit mx-auto mt-4">
            <span
              className={`text-[40px] font-bold font-inter ${textColorSpan}`}
            >
              {number}
            </span>
            <h3 className="text-[32px] font-quicksand font-bold mt-[6px]">
              {title}
            </h3>
          </div>

          <div>
            <p className="ml-6 mt-6 text-[16px] font-quicksand absolute font-bold ">
              {description}
            </p>
            <span className="font-quicksand bottom-10  font-extrabold ml-6 absolute mt-6">
              {span}
            </span>
          </div>
        </div>
        <img
          src="public/assets/images/home/explota_talento/Recortada.png"
          alt=""
          className="relative  z-[100] "
        />
      </div>
    </>
  );
};

PhoneCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  textColorSpan: PropTypes.string.isRequired,
};
