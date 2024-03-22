import React, { useState, useEffect } from "react";
import * as R from "ramda";
import { Strings } from "../../Services/Utils/Locals";
import Styled from "./styled";
import helper from "../../Services/Utils/helper";

const RandomNumber = ({ displayCurrentDate = null }) => {
  const initialData = {
    randNumber: [
      {
        position: 1,
        number: null,
        status: "wait",
      },
      {
        position: 2,
        number: null,
        status: "wait",
      },
      {
        position: 3,
        number: null,
        status: "wait",
      },
      {
        position: 4,
        number: null,
        status: "wait",
      },
      {
        position: 5,
        number: null,
        status: "wait",
      },
    ],
    currentNumberPosition: 1,
    isStartRandom: false,
  };
  const [randNumber, setRandNumber] = useState(initialData.randNumber);
  const [currentNumberPosition, setCurrentNumberPosition] = useState(
    initialData.currentNumberPosition
  );
  const [isStartRandom, setIsStartRandom] = useState(initialData.isStartRandom);

  useEffect(() => {
    handleConnectSockerIo();
  }, []);

  useEffect(() => {
    if (isStartRandom === true) {
      if (currentNumberPosition <= randNumber.length) {
        let random = 0;
        let timer = setInterval(() => {
          random = Math.floor(Math.random() * 10);
          let _randNumber = [...randNumber];

          _randNumber[currentNumberPosition - 1] = {
            position: currentNumberPosition,
            number: random,
            status: "random",
          };
          setRandNumber(_randNumber);
        }, 100);

        setTimeout(() => {
          clearInterval(timer);

          let _randNumber = [...randNumber];
          _randNumber[currentNumberPosition - 1] = {
            ...randNumber[currentNumberPosition - 1],
            number: random,
            status: "finished",
          };
          setRandNumber(_randNumber);
          setCurrentNumberPosition(currentNumberPosition + 1);

          if (currentNumberPosition === randNumber.length) {
            setIsStartRandom(false);
          }
        }, 10000);

        return () => clearInterval(timer);
      }
    }
  }, [currentNumberPosition, isStartRandom]);

  const handleConnectSockerIo = () => {
    try {
      const socket = helper.connectSocketio();
      socket.on("startRandom", (data) => {
        if (data && data.start_random) {
          handleClearData();
          setIsStartRandom(data.start_random);
        }
      });
    } catch (error) {
      console.log("error handleConnectSockerIo:", error);
    }
  };

  const handleClearData = () => {
    setRandNumber(initialData.randNumber);
    setCurrentNumberPosition(initialData.currentNumberPosition);
  };

  const renderRandomComp = () => {
    return (
      <Styled.RandomNumberContainer>
        {randNumber.map((item, index) => {
          return (
            <div key={index}>
              <Styled.NumberContainer status={item.status}>
                {item.number}
              </Styled.NumberContainer>
            </div>
          );
        })}
      </Styled.RandomNumberContainer>
    );
  };

  const renderResultComp = () => {
    return (
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
                number: 1,
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
    );
  };

  const renderDateComp = () => {
    return !R.isNil(displayCurrentDate) ? (
      <Styled.DateContainer>{displayCurrentDate}</Styled.DateContainer>
    ) : null;
  };

  return (
    <Styled.Container>
      {renderDateComp()}
      {renderRandomComp()}
      {renderResultComp()}
    </Styled.Container>
  );
};

export default RandomNumber;
