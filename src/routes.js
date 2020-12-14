import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login/Login";
import Register from "./pages/registery/Registering";
import Recover from "./pages/recovery/Recovering";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/recovery">
          <Recover />
        </Route>
      </Switch>
    </Router>
  );
}
