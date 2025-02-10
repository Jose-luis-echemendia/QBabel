import PropTypes from "prop-types";

export const Opinion = ({ data }) => {
  return (
    <>
      <figure>
        <img src={data.src} alt="avatar" className="object-cover w-full" />
      </figure>
      <p className="text-center text-lg font-semibold text-gray-700 px-4">
        {data.opinion}
      </p>
    </>
  );
};

Opinion.propTypes = {
  data: PropTypes.shape({
    src: PropTypes.string.isRequired,
    opinion: PropTypes.string.isRequired,
  }).isRequired,
};
