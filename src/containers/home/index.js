import React from "react";
import { Strings } from "../../cores/locals/index";

const Home = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>{Strings.getString("home.message")}</div>
      <div>
        {Strings.formatString(Strings.getString("home.userMessage"), {
          user: "user_name",
        })}
      </div>
    </div>
  );
};
export default Home;
