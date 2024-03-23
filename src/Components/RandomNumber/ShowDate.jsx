import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import * as R from "ramda";
import { Strings } from "../../Services/Utils/Locals";
import helper from "../../Services/Utils/helper";
import Styled from "./ShowDate.styled";

const ShowDate = () => {
  const [displayCurrentDate, setDisplayCurrentDate] = useState("");
  const language = useSelector((state) => state.language);

  useMemo(() => {
    const currentDate = helper.getCurrentTime();
    let formattedDate = "";

    if (currentDate) {
      if (language === "eng") {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
        const day = String(currentDate.getDate()).padStart(2, "0");
        const dayOfWeek = currentDate.toLocaleDateString("en-US", {
          weekday: "short",
        });

        formattedDate = `${year}-${month}-${day}[${dayOfWeek}]`;
        setDisplayCurrentDate(formattedDate);
      } else if (language === "laos") {
        const options = {
          weekday: "short",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "Asia/Vientiane",
        };
        const formattedDate = currentDate.toLocaleDateString("lo-LA", options);
        const month_number = currentDate.getMonth() + 1;
        const dateParts = formattedDate.split(", ");
        const day = dateParts[1].split(" ")[1]; // Assuming the day is the second part after splitting
        const year = dateParts[2];

        setDisplayCurrentDate(
          Strings.formatString(Strings.getString("homePage.headerDate"), {
            date: `${day} ${helper.getMonth(month_number)} ${year}`,
          })
        );
      }
    }
  }, []);

  return !R.isNil(displayCurrentDate) ? (
    <Styled.DateContainer>{displayCurrentDate}</Styled.DateContainer>
  ) : null;
};

export default ShowDate;
