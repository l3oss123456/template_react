import React from "react";
import { Strings } from "../../cores/locals/index";
import Styled from "./styles";

const Home = (props) => {
  return (
    <Styled.screenContainer>
      <div>{Strings.getString("home.message")}</div>
      <div>
        {Strings.formatString(Strings.getString("home.userMessage"), {
          user: "user_name",
        })}
      </div>
    </Styled.screenContainer>
  );
};
export default Home;
