import React from "react";
import * as R from "ramda";
import Styled from "./ShowResultLottery.styled";
import { Strings } from "../../Services/Utils/Locals";

const ShowResultLottery = ({ randNumber = null }) => {
  return !R.isNil(randNumber) ? (
    <>
      <Styled.ResultContainer>
        <Styled.ResultSection>
          {Strings.formatString(
            Strings.getString("randomComponent.resultText"),
            {
              number: 5,
            }
          )}
        </Styled.ResultSection>
        <Styled.ResultSection>
          {randNumber.map((item) => {
            let result = "";
            if (item.status === "finished") {
              result += `${item.number}`;
            }

            return result;
          })}
        </Styled.ResultSection>
      </Styled.ResultContainer>

      <Styled.ResultContainer>
        <Styled.ResultSection>
          {Strings.formatString(
            Strings.getString("randomComponent.resultText"),
            {
              number: 4,
            }
          )}
        </Styled.ResultSection>
        <Styled.ResultSection>
          {randNumber.map((item) => {
            let result = "";
            if (item.position > 1 && item.status === "finished") {
              result += `${item.number}`;
            }

            return result;
          })}
        </Styled.ResultSection>
      </Styled.ResultContainer>

      <Styled.ResultContainer>
        <Styled.ResultSection>
          {Strings.formatString(
            Strings.getString("randomComponent.resultText"),
            {
              number: 3,
            }
          )}
        </Styled.ResultSection>
        <Styled.ResultSection>
          {randNumber.map((item) => {
            let result = "";
            if (item.position > 2 && item.status === "finished") {
              result += `${item.number}`;
            }

            return result;
          })}
        </Styled.ResultSection>
      </Styled.ResultContainer>

      <Styled.ResultContainer>
        <Styled.ResultSection>
          {Strings.formatString(
            Strings.getString("randomComponent.lastTwoResultText"),
            {
              number: 2,
            }
          )}
        </Styled.ResultSection>
        <Styled.ResultSection>
          {randNumber.map((item) => {
            let result = "";
            if (item.position > 3 && item.status === "finished") {
              result += `${item.number}`;
            }

            return result;
          })}
        </Styled.ResultSection>
      </Styled.ResultContainer>

      <Styled.ResultContainer>
        <Styled.ResultSection>
          {Strings.formatString(
            Strings.getString("randomComponent.firstTwoResultText"),
            {
              number: 2,
            }
          )}
        </Styled.ResultSection>
        <Styled.ResultSection>
          {randNumber.map((item) => {
            let result = "";
            if (
              item.position >= 1 &&
              item.position <= 2 &&
              item.status === "finished"
            ) {
              result += `${item.number}`;
            }

            return result;
          })}
        </Styled.ResultSection>
      </Styled.ResultContainer>
    </>
  ) : null;
};

export default ShowResultLottery;
