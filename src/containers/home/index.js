import React from "react";
import { Strings } from "../../cores/locals/index";
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
    </Styled.HomeContainer>
  );
};
export default Home;
