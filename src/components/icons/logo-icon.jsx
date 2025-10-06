import { useAppSelector } from "@/hooks/redux/useStore";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const IconLogo = ({ alt, size, className }) => {
  const auth = useAppSelector((state) => state.auth);

  const getLink = () => {
    if (auth.isAuthenticated) {
      return "/home";
    }
    return "/";
  };

  return (
    <NavLink to={getLink()}>
      <img
        className={className}
        src="/assets/icons/Logoprincipal.svg"
        alt={alt || "App Logo"}
        width={size || "40"}
        height={size || "40"}
        style={{ objectFit: "contain" }}
      />
    </NavLink>
  );
};

IconLogo.propTypes = {
  alt: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};
