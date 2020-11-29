import React from "react";
import "./Styles/chrs.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";

const LandingPage = React.lazy(() => import("./Pages/LandingPage"));
const SignIn = React.lazy(() => import("./Pages/Authentication/SignIn"));
const SignUp = React.lazy(() => import("./Pages/Authentication/SignUp"));
const SingleHotel = React.lazy(() => import("./Pages/SingleHotel"));

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
            </React.Suspense>
          </MainLayout>
        </React.Fragment>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
