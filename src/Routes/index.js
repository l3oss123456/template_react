import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../Layout/Navigator";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import AboutUs from "../Pages/Aboutus";
import Contact from "../Pages/Contact";
import ScrollToAnimation from "../Pages/ScrollToAnimation";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <Login />} />
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/about-us" component={() => <AboutUs />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route
            exact
            path="/animationOnScroll"
            component={() => <ScrollToAnimation />}
          />
        </Switch>
      </Layout>
    </Router>
  );
};
export default Routes;
