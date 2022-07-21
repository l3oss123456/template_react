import React, { useEffect } from "react";
import Aos from "aos";
import Styles from "./styles";

const ScrollToAnimation = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      easing: "ease-in-sine",
    });
  }, []);

  return (
    <div>
      <h1>Pricing</h1>
      <Styles.grids>
        <Styles.boxes>1</Styles.boxes>
        <Styles.boxes>2</Styles.boxes>
        <Styles.boxes data-aos={`flip-left`}>3</Styles.boxes>
        <Styles.boxes data-aos={`fade-right`}>4</Styles.boxes>
        <Styles.boxes data-aos={`fade-left`} data-aos-duration={`1000`}>
          5
        </Styles.boxes>
      </Styles.grids>
    </div>
  );
};

export default ScrollToAnimation;
