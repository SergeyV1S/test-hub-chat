import { Navigate, Outlet, useLocation } from "react-router-dom";

import { localStorageKeys, paths } from "@/shared/constants";
import { useLocalStorage } from "@/shared/hooks";

export const PrivateRoute = () => {
  const location = useLocation();
  const { getValueFromLocalStorage } = useLocalStorage();

  const userData = getValueFromLocalStorage(localStorageKeys.USER_DATA);

  if (location.pathname !== paths.SIGNIN && !userData) {
    return <Navigate to={paths.SIGNIN} state={{ from: location }} replace />;
  }

  if (location.pathname === paths.SIGNIN && userData) {
    return <Navigate to={location.state?.pathname || paths.CHAT} replace />;
  }

  return <Outlet />;
};
