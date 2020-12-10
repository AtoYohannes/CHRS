import React from "react";
import "./Styles/chrs.scss";
// import "react-animated-slider/build/horizontal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const SignIn = React.lazy(() => import("./Pages/Authentication/SignIn"));
const SignUp = React.lazy(() => import("./Pages/Authentication/SignUp"));
const SingleHotel = React.lazy(() => import("./Pages/SingleHotel"));
const Booking = React.lazy(() => import("./Pages/Booking"));
const Rating = React.lazy(() => import("./Pages/Rating"));
const AllHotels = React.lazy(() => import("./Pages/AllHotels"));
const AddHotel = React.lazy(() => import("./Pages/AddHotel"));
const BookingConfirmation = React.lazy(() =>
  import("./Pages/BookingConfirmation")
);
const SettingsPage = React.lazy(() => import("./Pages/SettingsPage"));
const ProfilePage = React.lazy(() => import("./Pages/ProfilePage"));

// ========== ADMIN ROUTES ==========
const AdminPage = React.lazy(() => import("./Pages/Admin"));

// ========== HOTEL OWNERS ROUTES ==========
const EditHotel = React.lazy(() => import("./Pages/HotelOwners/EditHotel"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <Switch>
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={LandingPage} />
              <Route exact path={routes.signIn} component={SignIn} />
              <Route exact path={routes.signUp} component={SignUp} />
              <Route exact path={routes.singleHotel} component={SingleHotel} />
              <Route exact path={routes.booking} component={Booking} />
              <Route
                exact
                path={routes.bookingConfirmation}
                component={BookingConfirmation}
              />
              <Route exact path={routes.rating} component={Rating} />
              <Route exact path={routes.allHotels} component={AllHotels} />
              <Route exact path={routes.addHotels} component={AddHotel} />
              <Route exact path={routes.profile} component={ProfilePage} />
              <Route exact path={routes.settings} component={SettingsPage} />
              {/* ============= ADMIN ROUTES ============= */}

              <Route exact path={routes.admin} component={AdminPage} />
              {/* ============= HOTEL OWNERS ROUTES ============= */}
              <Route exact path={routes.editHotel} component={EditHotel} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
