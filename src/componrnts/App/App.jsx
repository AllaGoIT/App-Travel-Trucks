import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogePage = lazy(() => import("../../pages/CatalogPage"));
const CemperPage = lazy(() => import("../../pages/CemperPage/CamperPage.jsx"));

import BookingForm from "../BookingForm/BookingForm.jsx";

import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../redux/auth/operations";

import { selectIsRefreshing } from "../../redux/auth/selectors.js";

import Header from "../Header/Header.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing user please wait...</div>
  ) : (
    <Header>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <RestrictedRoute
                component={<CatalogePage />}
                redirect
                To="/catalog"
              />
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <RestrictedRoute
                component={<CemperPage />}
                redirect
                To="/catalog/:id"
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
