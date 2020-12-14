import React from "react";
import "./Styles/chrs.scss";
// import "react-animated-slider/build/horizontal.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import configureStore from "./store/configureStore";

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
const CustomersManagement = React.lazy(() =>
  import("./Pages/Admin/components/CustomersManagement")
);
const HotelsManagement = React.lazy(() =>
  import("./Pages/Admin/components/HotelsManagement")
);
const PendingPropertyRequests = React.lazy(() =>
  import("./Pages/Admin/components/PendingPropertyRequests")
);

// ========== HOTEL OWNERS ROUTES ==========
const EditHotel = React.lazy(() => import("./Pages/EditHotel"));
const AllRatings = React.lazy(() => import("./Pages/AllRatingsAndReviews"));
const RecentBookings = React.lazy(() => import("./Pages/RecentBookings"));
const Customers = React.lazy(() => import("./Pages/Customers"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};
export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        transition={Zoom}
        rtl={false}
        pauseOnFocusLoss
        closeButton={false}
        draggable
        pauseOnHover
      />
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
                <Route
                  exact
                  path={routes.singleHotel}
                  component={SingleHotel}
                />
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
                <Route
                  exact
                  path={routes.customersManagement}
                  component={CustomersManagement}
                />
                <Route
                  exact
                  path={routes.pendingHotelRequests}
                  component={PendingPropertyRequests}
                />
                <Route
                  exact
                  path={routes.hotelsManagement}
                  component={HotelsManagement}
                />

                {/* ============= HOTEL OWNERS ROUTES ============= */}
                <Route exact path={routes.editHotel} component={EditHotel} />
                <Route exact path={routes.allRatings} component={AllRatings} />
                <Route
                  exact
                  path={routes.recentBookings}
                  component={RecentBookings}
                />
                <Route exact path={routes.customers} component={Customers} />
              </React.Suspense>
            </MainLayout>
          </React.Fragment>

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
