import React, { useState, useEffect, useMemo } from "react";
import * as R from "ramda";
import ShowPrevResultLottery from "./ShowPrevResultLottery";
import ShowResultLottery from "./ShowResultLottery";
import { getTodayLottery } from "../../Services/Axios/Api/lottery/lottery";
import ShowDate from "./ShowDate";
import { useSelector } from "react-redux";
import helper from "../../Services/Utils/helper";
import Styled from "./styled";

const RandomNumber = () => {
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
    todayLottery: {},
  };
  const [randNumber, setRandNumber] = useState(initialData.randNumber);
  const [currentNumberPosition, setCurrentNumberPosition] = useState(
    initialData.currentNumberPosition
  );
  const [isStartRandom, setIsStartRandom] = useState(initialData.isStartRandom);
  const [todayLottery, setTodayLottery] = useState(initialData.todayLottery);
  const language = useSelector((state) => state.language);

  useEffect(() => {
    handleConnectSockerIo();
  }, []);

  useMemo(() => {
    if (isStartRandom === true) {
      handleGetTodayLottery();
    }
  }, [isStartRandom]);

  useEffect(() => {
    if (!R.isEmpty(todayLottery)) {
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
            // number: random,
            number: todayLottery.number.toString()[currentNumberPosition - 1],
            status: "finished",
          };

          setRandNumber(_randNumber);
          setCurrentNumberPosition(currentNumberPosition + 1);

          if (currentNumberPosition === randNumber.length) {
            setIsStartRandom(false);
          }
        }, 3000);

        return () => clearInterval(timer);
      }
    }
  }, [currentNumberPosition, todayLottery]);

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

  async function handleGetTodayLottery() {
    try {
      const resp = await getTodayLottery({
        lottery_type: language,
      });

      if (resp.data.code === 1000) {
        setTodayLottery(resp.data.data.results);
      }
    } catch (error) {
      console.log("error handleGetAllLottery: ", error);
    }
  }

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

  return (
    <Styled.Container>
      <ShowDate />
      {renderRandomComp()}
      <ShowResultLottery randNumber={randNumber} />

      <ShowPrevResultLottery />
    </Styled.Container>
  );
};

export default RandomNumber;
