import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuBar from "../../components/Menubar";
import Home from "../../containers/home";
import AboutUs from "../../containers/aboutus";
import Contact from "../../containers/contact";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <MenuBar>
              <Home />
            </MenuBar>
          )}
        />
        <Route
          exact
          path="/about-us"
          component={() => (
            <MenuBar>
              <AboutUs />
            </MenuBar>
          )}
        />
        <Route
          exact
          path="/contact"
          component={() => (
            <MenuBar>
              <Contact />
            </MenuBar>
          )}
        />
      </Switch>
    </Router>
  );
};
export default Routes;
