import React from "react";
import Images from "../Images";
import { colors } from "../../cores/theme";
import "./Loading.modules.css";

const Loading = ({ loading = false }) => {
  return loading === true ? (
    <>
      <div
        style={{
          position: `absolute`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          opacity: 0.2,
          background: colors.black,
          zIndex: 999,
        }}
      ></div>
      <div
        className="rotate"
        style={{
          position: `fixed`,
          top: 0,
          left: 0,
          width: `100%`,
          height: `100%`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <Images name="icon.logo" width={150} height={150} />
      </div>
    </>
  ) : null;
};

export default Loading;
