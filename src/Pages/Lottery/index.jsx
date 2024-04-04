import React from "react";
import RandomNumber from "../../Components/RandomNumber";
import Styled from "./styled";
import { Strings } from "../../Services/Utils/Locals";

const Lottery = () => {
  const renderHeader = () => {
    return (
      <div style={{ backgroundColor: "lightgreen" }}>
        {Strings.getString("homePage.header")}
      </div>
    );
  };

  return (
    <Styled.HomeContainer>
      {renderHeader()}

      <Styled.RandomContainer>
        <RandomNumber />
      </Styled.RandomContainer>
    </Styled.HomeContainer>
  );
};

export default Lottery;
