import React, { useState, useEffect } from "react";
import Styles from "./styles";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 50);
    }
  }, [progress]);

  return (
    <Styles.Meter progress={progress}>
      <span>
        <progress-text>{`${progress}%`}</progress-text>
      </span>
    </Styles.Meter>
  );
};

export default ProgressBar;
