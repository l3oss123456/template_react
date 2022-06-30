import React, { useState, useEffect } from "react";

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
      {data.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
};

export default AboutUs;
