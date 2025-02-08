import PropTypes from "prop-types";

export const CustomAvatar = ({ src }) => {
  return (
    <figure>
      <img src={src} alt="avatar" className="object-cover w-full" />
    </figure>
  );
};

CustomAvatar.propTypes = {
  src: PropTypes.string.isRequired,
};
