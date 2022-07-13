import React from "react";
import Styles from "./styles";

const ProgressBar = ({
  progress = 0,
  background = "#f42323",
  fontColor = "white",
}) => {
  return (
    <Styles.Meter
      progress={progress}
      background={background}
      fontColor={fontColor}
    >
      <span />
      <progress-text>{`${progress}%`}</progress-text>
    </Styles.Meter>
  );
};

export default ProgressBar;
