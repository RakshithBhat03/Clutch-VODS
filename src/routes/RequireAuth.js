import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
function RequireAuth({ isLoggedIn = false }) {
  const { userToken } = useSelector((store) => store.auth);
  const location = useLocation();
  if (isLoggedIn) {
    return userToken ? (
      <Navigate
        to={location?.state?.from?.pathname || "/   "}
        state={{ from: location }}
        replace
      />
    ) : (
      <Outlet />
    );
  }
  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { RequireAuth };
