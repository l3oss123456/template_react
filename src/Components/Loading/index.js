import React from "react";
import Images from "../Images";
// import { colors } from "../../cores/theme";
import Styles from "./styles";
import "./Loading.modules.css";

const Loading = ({ loading = false }) => {
  return loading === true ? (
    <>
      <Styles.LoadingBackground />
      <Styles.Rotate>
        <Images name="icon.logo" width={150} height={150} />
      </Styles.Rotate>
    </>
  ) : null;
};

export default Loading;
