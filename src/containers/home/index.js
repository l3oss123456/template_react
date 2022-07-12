import React from "react";
import { Strings } from "../../cores/locals/index";
import ProgressBar from "../../components/ProgressBar";
import Styled from "./styles";

const Home = (props) => {
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
        <ProgressBar />
      </div>
    </Styled.HomeContainer>
  );
};
export default Home;
