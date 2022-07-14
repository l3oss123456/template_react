import React, { useState, useEffect } from "react";
import { Strings } from "../../cores/locals/index";
import ProgressBar from "../../components/ProgressBar";
import Timeline from "../../components/Timeline";
import Styled from "./styles";

const Home = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 20);
    }
  }, [progress]);

  return (
    <Styled.HomeContainer>
      <div>{Strings.getString("home.message")}</div>
      <div>
        {Strings.formatString(Strings.getString("home.userMessage"), {
          user: "name",
        })}
      </div>
      <div>
        <p>ProgressBar</p>
        <ProgressBar progress={progress} />
      </div>
      <div>
        <p>Timeline</p>
        <Timeline />
      </div>
    </Styled.HomeContainer>
  );
};
export default Home;
