import { useDispatch } from "react-redux";
import { useSelector, useEffect } from "react-redux";
import { refresh } from "../../redux/users/operations.js";
import { getCurrentUser } from "../../redux/auth/operations.js";

import { selectUserToken } from "../../redux/auth/selectors.js";
import { selectIsRefreshing } from "../../redux/users/selectors.js";
import Navigation from "../../components/Navigation/Navigation.jsx";

function CamperPage() {
  const dispatch = useDispatch();
  const userToken = useSelector(selectUserToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(
    (userToken) => {
      dispatch(getCurrentUser(userToken));
    },
    [dispatch, userToken]
  );

  if (isRefreshing) {
    dispatch(refresh());
  }
  [dispatch, isRefreshing];

  return (
    <>
      <p>Features</p>
      <Navigation />
      <p>Reviews</p>
      <Navigation />
    </>
  );
}
export default CamperPage;
