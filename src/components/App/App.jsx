import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import RestrictedRoute from "../../components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogePage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CemperPage = lazy(() => import("../../pages/CemperPage/CamperPage.jsx"));

import BookingForm from "../../components/BookingForm/BookingForm.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { refresh } from "../../redux/auth/operations.js";
import { getCurrentUser } from "../../redux/users/operations";

import { selectIsRefreshing, selectToken } from "../../redux/auth/selectors.js";
import Loader from "../Loader/Loader.jsx";

import Header from "../Header/Header.jsx";

function App() {
  const dispatch = useDispatch();
  const userToken = useSelector(selectToken);
  console.log("userToken:", userToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (userToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, userToken]);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
    <Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <RestrictedRoute
                component={<CatalogePage />}
                redirect
                To="/campers"
              />
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <RestrictedRoute
                component={<CemperPage />}
                redirect
                To="/campers/:id"
              />
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute
                component={<BookingForm />}
                redirect
                To="/reserve"
              />
            }
          />
        </Routes>
      </Suspense>
    </Header>
  );
}

export default App;
