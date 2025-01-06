

import PropTypes from 'prop-types';

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
      <div className="bg-transparent relative pt-8">
      <div
        className={`absolute top-14 h-[462px] rounded-lg left-[8rem] w-[225px] ${bg}`}
        >

          <div className="flex w-fit mx-auto mt-4">
            <span className={`text-[40px] font-bold font-inter ${textColorSpan}`}>{number}</span>
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
          src="public/assets/images/home/explota_talento/Publicación de Instagram de Motivación Diaria (2) 1.png"
          alt=""
          className="relative z-50"
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