import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Navigator";
import Home from "../Pages/Home";
import AboutUs from "../Pages/Aboutus";
import Contact from "../Pages/Contact";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/about-us" component={() => <AboutUs />} />
          <Route exact path="/contact" component={() => <Contact />} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default Routes;
