import PropTypes from 'prop-types';

export const PhoneCard = ({
  number,
  title,
  description,
  span,
  src,
  textColorSpan,
  descriptionColor,
}) => {
  return (
    <article className="relative   bg-transparent pt-8">
      <div className="relative   h-[507px]">
        {/* Imagen */}
        <img
          src={src}
          alt={`Imagen representativa de ${title}`}
          className="w-full relative z-[100] h-full object-cover rounded-lg"
        />

        {/* Texto sobrepuesto */}
        <div
          className={`absolute top-0 left-0 w-full   z-[130]  h-full rounded-lg flex flex-col justify-center items-center p-4 `}
          aria-labelledby={`card-${number}`}
        >
          <header className="flex mb-6">
            <span
              id={`card-${number}`}
              className={`text-[45px] font-bold font-inter ${textColorSpan}`}
            >
              {number}
            </span>
            <h3 className="text-[36px] font-quicksand font-bold mt-2">
              {title}
            </h3>
          </header>

          <div className="  px-4">
            <p
              className={`text-[16px] font-quicksand font-semibold ${descriptionColor}`}
            >
              {description}
            </p>
            <span className=" font-inter  font-bold">{span}</span>
          </div>
        </div>
      </div>
    </article>
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
