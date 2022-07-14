import React from "react";
import Styles from "./styles";

const Timeline = ({
  listTimeline = [
    <>
      <p>2017</p>
      <p>
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
        eam.
      </p>
    </>,
    <>
      <p>2016</p>
      <p>
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
        eam.
      </p>
    </>,
    <>
      <p>2015</p>
      <p>
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
        eam.
      </p>
    </>,
    <>
      <p>2014</p>
      <p>
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
        eam.
      </p>
    </>,
    <>
      <p>2013</p>
      <p>
        Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
        perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
        expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
        eam.
      </p>
    </>,
  ],
}) => {
  return (
    <Styles.timeline>
      {listTimeline.map((item, index) => {
        return (
          <Styles.container
            key={index}
            rightSide={index % 2 !== 0 ? true : false}
          >
            <container-circle />

            <Styles.content rightSide={index % 2 !== 0 ? true : false}>
              <content-arrow />
              {item}
            </Styles.content>
          </Styles.container>
        );
      })}
    </Styles.timeline>
  );
};

export default Timeline;
