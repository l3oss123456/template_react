import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../../components/Layout";
import Home from "../../containers/home";
import AboutUs from "../../containers/aboutus";
import Contact from "../../containers/contact";

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
