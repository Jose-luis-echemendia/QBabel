import PropTypes from "prop-types";

export const Opinion = ({ data }) => {
  console.log(data)
  return (
    <>
      <figure>
        <img src={data.srcImage} alt="avatar" className="object-cover w-full" />
      </figure>
      <p className="text-center text-lg font-semibold text-gray-700 px-4">
        {data.opinion}
      </p>
    </>
  );
};

Opinion.propTypes = {
  data: PropTypes.shape({
    srcImage: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
  }).isRequired,
};
