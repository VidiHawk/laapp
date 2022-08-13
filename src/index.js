import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// routing components
import Index from "views/Index.jsx";
import Alternative1 from "views/landing/Alternative1.jsx";
import Alternative3 from "views/landing/Alternative3.jsx";

// pages
import Terms from "views/pages/Terms.jsx";
import Privacy from "views/pages/Privacy.jsx";
// global template script file
import "./vidiren.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route path="/terms" exact render={(props) => <Terms {...props} />} />
      <Route path="/privacy" exact render={(props) => <Privacy {...props} />} />
      <Route
        path="/alter-1"
        exact
        render={(props) => <Alternative1 {...props} />}
      />
      <Route
        path="/alter-3"
        exact
        render={(props) => <Alternative3 {...props} />}
      />

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
