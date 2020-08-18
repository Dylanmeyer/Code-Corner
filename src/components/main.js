import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./mainPage";
import HtmlPage from "./htmlPage";
import CssPage from "./cssPage";
import JavaPage from "./javaPage";
import Login from "./login";
import SignIn from "./signIn";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/htmlPage" component={HtmlPage} />
    <Route path="/cssPage" component={CssPage} />
    <Route path="/javaPage" component={JavaPage} />
    <Route path="/login" component={Login} />
    <Route path="/signin" component={SignIn} />
  </Switch>
);

export default Main;
