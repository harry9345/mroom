import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/registery/Registering"));
const Recover = lazy(() => import("./pages/recovery/Recovering"));
const Language = lazy(() => import("./pages/profile/language/Language.js"));
const Search = lazy(() => import("./pages/search/Search"));
const Profile = lazy(() => import("./pages/profile/Profile"));
const List = lazy(() => import("./pages/list/List"));
const BarberShop1 = lazy(() => import("./pages/barberShop/BarberShop1"));
const BarberShop2 = lazy(() => import("./pages/barberShop/BarberShop2"));

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Redirect from="/" to="/login" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/recovery" component={Recover} />
          <Route path="/language" component={Language} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={List} />
          <Route path="/barbershop1" component={BarberShop1} />
          <Route path="/barbershop2" component={BarberShop2} />
        </Suspense>
      </Switch>
    </Router>
  );
}
