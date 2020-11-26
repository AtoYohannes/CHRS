import React from "react";
import "./Styles/chrs.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";

const DemoPage = React.lazy(() => import("./Pages/DemoPage"));
const Auth = React.lazy(() => import("./Pages/Authentication/Auth"));

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
              <Route exact path={routes.homePage} component={DemoPage} />
              <Route exact path={routes.Auth} component={Auth} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
