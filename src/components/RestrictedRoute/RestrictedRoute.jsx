import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors.js";
import { Navigate } from "react-router-dom";

function RestrictedRoute({ component, redirectTo }) {
  const isLoading = useSelector(selectIsLoading);
  return isLoading ? <Navigate to={redirectTo} /> : component;
}

export default RestrictedRoute;
