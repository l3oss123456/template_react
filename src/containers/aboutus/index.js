import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { fontSize } from "../../cores/theme";
import { useScrollPosition } from "../../helper/global";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setNewData = () => {
      const _data = [];
      for (var i = 0; i < 100; i++) {
        _data.push("about-us");
      }
      setData(_data);
    };
    setNewData();
  }, []);

  const yAxis = useScrollPosition();

  const renderScrollToBottomButton = () => {
    return (
      <div
        style={{
          position: "relative",
          display: `flex`,
          justifyContent: `center`,
          transition: `0.5s ease-out`,
          top: -20,
        }}
      >
        <Button
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          style={{
            position: "fixed",
            opacity: yAxis >= 0 && yAxis < 100 ? 1 : 0,
          }}
        >
          <DownOutlined /> Scroll To Bottom
        </Button>
      </div>
    );
  };
  const renderScrollToTopButton = () => {
    return (
      <div
        style={{
          position: "relative",
          display: `flex`,
          justifyContent: `center`,
          transition: `0.5s ease-out`,
          // top: -20,
        }}
      >
        <Button
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{
            // position: "fixed",
            opacity: yAxis >= 1510 ? 1 : 0,
          }}
        >
          <UpOutlined /> Scroll To Top
        </Button>
      </div>
    );
  };

  return (
    <div style={{}}>
      {renderScrollToBottomButton()}
      <div
        style={{
          fontSize: fontSize.mainTitle,
          // lineHeight: fontSize.mainTitle * 1.5,
        }}
      >
        Main Title
      </div>
      <div style={{ fontSize: fontSize.title }}>Title</div>
      <div style={{ fontSize: fontSize.subTitle }}>Sub Title</div>
      <div style={{ fontSize: fontSize.text }}>Text</div>
      <div style={{ fontSize: fontSize.details }}>Details</div>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      {renderScrollToTopButton()}
    </div>
  );
};

export default AboutUs;
