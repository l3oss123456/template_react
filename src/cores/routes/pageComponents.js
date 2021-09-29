import React from "react";
import MenuBar from "../../components/Layout";
import Home from "../../containers/home/index";

export const _Home = () => (
  <MenuBar defaultSelectedKeys="1">
    <Home />
  </MenuBar>
);
