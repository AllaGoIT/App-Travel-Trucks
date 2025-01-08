import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/users/selectors.js";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component, redirectTo }) {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? component : <Navigate to={redirectTo} />;
}
