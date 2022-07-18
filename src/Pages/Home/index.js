import React, { useState, useEffect } from "react";
import { Strings } from "../../Services/Utils/Locals/index";
import ProgressBar from "../../Components/ProgressBar";
import Carousel from "../../Components/Carousel";
import Timeline from "../../Components/Timeline";
import Styled from "./styles";
import Images from "../../Components/Images";

const Home = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 20);
    }
  }, [progress]);

  const getListCard = () => {
    let card = [];
    for (var i = 0; i < 5; i++) {
      card = [
        ...card,
        {
          content: (
            <div style={{ textAlign: "center" }}>
              <Images name={`icon.logo`} width={`50%`} height={`auto`} />
              <p style={{ margin: 10 }}>{`Carousel${i + 1}`}</p>
              <p>this is content</p>
            </div>
          ),
        },
      ];
    }
    return card;
  };

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
        <ProgressBar progress={progress} />
      </div>
      <div
        style={{
          padding: `20px 0px 200px`,
        }}
      >
        <p>Carousel</p>
        <Carousel data={getListCard()} />
      </div>
      <div>
        <p>Timeline</p>
        <Timeline />
      </div>
    </Styled.HomeContainer>
  );
};
export default Home;
