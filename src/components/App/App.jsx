import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import RestrictedRoute from "../../components/RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogePage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CemperPage = lazy(() => import("../../pages/CemperPage/CamperPage.jsx"));

import Loader from "../Loader/Loader.jsx";
import Header from "../Header/Header.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";

function App() {
  return (
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
