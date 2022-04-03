/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://github.com/codemaker2015/material-dashboard-react
* Copyright 2021 Admin Dashboard (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/codemaker2015/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Admin Dashboard

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
