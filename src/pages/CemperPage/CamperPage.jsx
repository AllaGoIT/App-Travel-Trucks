import { useDispatch } from "react-redux";
import { useSelector, useEffect } from "react-redux";
import { refresh } from "../../redux/users/operations.js";
import { getCurrentUser } from "../../redux/userFeedBack/operations.js";

import { selectUserToken } from "../../redux/userFeedBack/selectors.js";
import { selectIsRefreshing } from "../../redux/users/selectors.js";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/catalog/:id">Reviews</NavLink>
      <NavLink to="/catalog/:id">Features</NavLink>
    </>
  );
}
export default CamperPage;
