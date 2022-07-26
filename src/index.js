import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Routes/index";
import store from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./Configs/theme";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
