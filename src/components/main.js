import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./mainPage";
import HtmlPage from "./htmlPage";
import CssPage from "./cssPage";
import JavaPage from "./javaPage";
import Login from "./login";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/htmlPage" component={HtmlPage} />
    <Route path="/cssPage" component={CssPage} />
    <Route path="/javaPage" component={JavaPage} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Main;
