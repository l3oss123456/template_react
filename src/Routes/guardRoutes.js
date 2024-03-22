// @flow
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { notification } from "antd";
import * as R from "ramda";
import { Strings } from "../Services/Utils/Locals";
import Layout from "../Layout/Navigator";

// type Props = {
//   exact: Boolean,
//   path: Any,
//   component: Component,
// };

// const renderComponent = (props) => {
//   const { component: Component } = props;
//   const GetLoginInfo = () => useSelector((state) => state.loginInfo);

//   if (R.isNil(GetLoginInfo())) {
//     notification.open({
//       type: "error",
//       message: Strings.getString(`no-login.message`),
//       description: Strings.getString(`no-login.description`),
//     });
//     return <Redirect to={`/login`} />;
//   } else {
//     return (
//       <Layout>
//         <Component {...Component} />
//       </Layout>
//     );
//   }
// };

const renderComponent = (props) => {
  const { component: Component } = props;

  return <Component {...Component} />;
};

const GuardRoutes = (props) => {
  const { exact, path } = props;
  const render = renderComponent(props);
  return <Route exact={exact} path={path} render={() => render} />;
};

export default GuardRoutes;
