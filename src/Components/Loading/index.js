import React, { useEffect } from "react";
import Images from "../Images";
// import { colors } from "../../cores/theme";
import Styles from "./styled";
import "./Loading.modules.css";

const Loading = ({ loading = false }) => {
  useEffect(() => {
    const container = document.getElementById("app-container");

    if (loading === true) {
      // document.body.style.overflow = "hidden"; // Disable scrolling
      document.body.classList.add("no-scroll");
    } else {
      // document.body.style.overflow = ""; // Re-enable scrolling when loading is false
      document.body.classList.remove("no-scroll");
    }
    return () => {
      // document.body.style.overflow = ""; // Re-enable scrolling when component unmounts
      document.body.classList.remove("no-scroll");
    };
  }, [loading]);

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
