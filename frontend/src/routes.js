import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import NlpDashboard from "./containers/NLPDashboard";
import PrivateRoute from "./PrivateRouter";


const BaseRouter = () => (
  <Hoc>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/" component={HomepageLayout} />
    <PrivateRoute component={NlpDashboard} path="/nlpdashboard" />
  </Hoc>
);

export default BaseRouter;
