import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { _Home } from "./pageComponents";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={_Home} />
      </Switch>
    </Router>
  );
};
export default Routes;
