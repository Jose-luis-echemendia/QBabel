import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children, isAllowed, redirectTo = "/" }) => {

    if (!isAllowed)
        return <Navigate to={redirectTo}></Navigate>;
    
      return children ? children : <Outlet />

};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  isAllowed: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string
};

