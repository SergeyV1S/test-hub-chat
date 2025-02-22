import { Navigate, Outlet, useLocation } from "react-router-dom";

import { localStorageKeys, paths } from "@/shared/constants";

export const PrivateRoute = () => {
  const location = useLocation();
  const userData = localStorage.getItem(localStorageKeys.USER_DATA);

  if (location.pathname !== paths.SIGNIN && !userData) {
    return <Navigate to={paths.SIGNIN} state={{ from: location }} replace />;
  }

  if (location.pathname === paths.SIGNIN && userData) {
    return <Navigate to={location.state?.pathname || paths.CHAT} replace />;
  }

  return <Outlet />;
};
