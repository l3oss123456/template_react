import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Table } from "antd";
import * as R from "ramda";
import { getLastSevenDayLottery } from "../../Services/Axios/Api/lottery/lottery";
import { Strings } from "../../Services/Utils/Locals";
import helper from "../../Services/Utils/helper";
import Styled from "./ShowPrevResultLottery.styled";

const ShowPrevResultLottery = () => {
  const language = useSelector((state) => state.language);
  const initialData = {
    prevResultLottery: [],
  };
  const [prevResultLottery, setPrevResultLottery] = useState(
    initialData.prevResultLottery
  );

  const { windowWidth } = helper.useWindowSize();

  useMemo(() => {
    handleGetAllLottery();
  }, []);

  async function handleGetAllLottery() {
    try {
      const resp = await getLastSevenDayLottery({
        // sort_field: [`order_number`],
        // sort_order: [1],
        lottery_type: language,
      });

      if (resp.data.code === 1000) {
        setPrevResultLottery(resp.data.data.results);
      }
    } catch (error) {
      // console.log("error handleGetAllLottery: ", error);
    }
  }

  const renderHeader = () => {
    return (
      <Styled.PrevResultLotteryHeader>
        {Strings.getString("showPrevResultLotter.header")}
      </Styled.PrevResultLotteryHeader>
    );
  };
  const renderPrevResult = () => {
    const columns = [
      {
        title: Strings.getString("showPrevResultLotter.headColumn1"),
        dataIndex: "created_at",
        fixed: "left",
        width: windowWidth <= 576 ? 150 : null,
        align: "center",
        render: (_, record) => {
          let displayDate = null;

          if (language === "eng") {
            // const year = currentDate.getFullYear();
            // const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
            // const day = String(currentDate.getDate()).padStart(2, "0");
            // const dayOfWeek = currentDate.toLocaleDateString("en-US", {
            //   weekday: "short",
            // });
            // formattedDate = `${year}-${month}-${day}[${dayOfWeek}]`;
            // setDisplayCurrentDate(formattedDate);
          } else if (language === "laos") {
            const date = new Date(record.created_at);
            const options = {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "Asia/Vientiane",
            };

            const formattedDate = date.toLocaleDateString("lo-LA", options);
            const month_number = date.getMonth() + 1;
            const dateParts = formattedDate.split(", ");
            const day = dateParts[1].split(" ")[1]; // Assuming the day is the second part after splitting
            const year = dateParts[2];

            displayDate = `${day} ${helper.getMonth(month_number)} ${year}`;
          }

          return displayDate;
        },
      },
      {
        title: Strings.formatString(
          Strings.getString("randomComponent.resultText"),
          {
            number: 5,
          }
        ),
        align: "center",
        dataIndex: "number",
      },
      {
        title: Strings.formatString(
          Strings.getString("randomComponent.resultText"),
          {
            number: 3,
          }
        ),
        align: "center",
        render: (_, record) => {
          return record.number % 1000;
        },
      },
      {
        title: Strings.formatString(
          Strings.getString("randomComponent.lastTwoResultText"),
          {
            number: 2,
          }
        ),
        align: "center",
        render: (_, record) => {
          return record.number % 100;
        },
      },
      {
        title: Strings.formatString(
          Strings.getString("randomComponent.firstTwoResultText"),
          {
            number: 2,
          }
        ),
        align: "center",
        render: (_, record) => {
          return Math.floor(record.number / 1000);
        },
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={prevResultLottery}
        scroll={{ x: 1300 }}
        pagination={false}
        bordered
      />
    );
  };

  return !R.isEmpty(prevResultLottery) ? (
    <Styled.PrevResultLotteryContainer>
      {renderHeader()}
      {renderPrevResult()}
    </Styled.PrevResultLotteryContainer>
  ) : null;
};

export default ShowPrevResultLottery;
