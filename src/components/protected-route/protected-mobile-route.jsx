import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const ProtectedMobileRoute = ({ children, isAllowed, redirectTo = "/" }) => {
    const isMobile = window.innerWidth <= 400;

    if (!isAllowed || !isMobile)
        return <Navigate to={redirectTo}></Navigate>;
    
      return children ? children : <Outlet />

};

ProtectedMobileRoute.propTypes = {
  children: PropTypes.node,
  isAllowed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string
};

