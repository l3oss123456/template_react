import React, { useState, useEffect } from "react";
import { fontSize } from "../../cores/theme";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const _data = [];
    for (var i = 0; i < 100; i++) {
      _data.push("about-us");
    }

    setData(_data);
  }, []);

  return (
    <div style={{ display: `flex`, flexDirection: `column` }}>
      <div
        style={{
          fontSize: fontSize.mainTitle,
          // lineHeight: fontSize.mainTitle * 1.5,
        }}
      >
        {/* Main Title */}
        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
      </div>
      <div style={{ fontSize: fontSize.title }}>Title</div>
      <div style={{ fontSize: fontSize.subTitle }}>Sub Title</div>
      <div style={{ fontSize: fontSize.text }}>Text</div>
      <div style={{ fontSize: fontSize.details }}>Details</div>
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default AboutUs;
