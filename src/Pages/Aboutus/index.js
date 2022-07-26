import React, { useState, useEffect, useRef } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { fontSize } from "../../Configs/theme";
import { useScrollPosition } from "../../Services/Utils/helper";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const myRef = useRef(null);

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
          justifyContent: `flex-end`,

          top: -20,
        }}
      >
        <div
          onClick={() => {
            // window.scrollTo({
            //   behavior: "smooth",
            //   top: myRef.current.offsetTop - 130,
            // });
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
          }}
          style={{
            position: "fixed",
            opacity: yAxis >= 0 && yAxis < 100 ? 1 : 0,
            background: `white`,
            borderRadius: `50%`,
            border: `1px solid black`,
            padding: `5px 10px`,
            cursor: `pointer`,
            transition: `0.5s ease-out`,
          }}
        >
          <DownOutlined
            style={{
              color: `black`,
            }}
          />
        </div>
      </div>
    );
  };
  const renderScrollToTopButton = () => {
    return (
      <div
        style={{
          position: "relative",
          display: `flex`,
          justifyContent: `flex-end`,

          // top: -20,
        }}
      >
        <div
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{
            // position: "fixed",
            opacity: yAxis >= 1510 ? 1 : 0,
            background: `white`,
            borderRadius: `50%`,
            border: `1px solid black`,
            padding: `5px 10px`,
            cursor: `pointer`,
            transition: `0.5s ease-out`,
          }}
        >
          <UpOutlined
            style={{
              color: `black`,
            }}
          />
        </div>
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
      <div ref={myRef} style={{ color: `red`, fontSize: 40 }}>
        yoyo
      </div>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      {renderScrollToTopButton()}
    </div>
  );
};

export default AboutUs;
