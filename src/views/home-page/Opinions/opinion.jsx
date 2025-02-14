import CustomRating from "@/components/rating";
import PropTypes from "prop-types";

export const Opinion = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <figure>
          <img
            src={data.srcImage}
            alt="avatar"
            className="object-cover w-full"
          />
        </figure>
        <p className="text-center text-lg font-semibold text-gray-700 px-4">
          {data.opinion}
        </p>
        <CustomRating
          value={data.rating}
          readonly
          srcRatedIcon="/assets/icons/iconsRatendStar.svg"
          srcUnratedIcon="/assets/icons/iconsUnratendStar.svg"
        />
      </div>
    </>
  );
};

Opinion.propTypes = {
  data: PropTypes.shape({
    srcImage: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};
