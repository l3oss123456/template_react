import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../../containers/home/index";
import Menubar from "./menuBar";

const _Home = () => (
  <Menubar>
    <Home />
  </Menubar>
);

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
