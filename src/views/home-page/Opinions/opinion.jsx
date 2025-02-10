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
  src: PropTypes.string.isRequired,
};
