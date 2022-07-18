import React, { useState, useEffect } from "react";
import * as R from "ramda";
import Styles from "./styles";

const Carousel = ({
  data = [
    {
      content: (
        <>
          <p>card1</p>
        </>
      ),
    },
    {
      content: (
        <>
          <p>card2</p>
        </>
      ),
    },
    {
      content: (
        <>
          <p>card3</p>
        </>
      ),
    },
    {
      content: (
        <>
          <p>card4</p>
        </>
      ),
    },
    {
      content: (
        <>
          <p>card5</p>
        </>
      ),
    },
  ],
}) => {
  const [listCard, setListCard] = useState([]);
  const [defaultListCard, setDefaultListCard] = useState([]);
  const [overDataIndex, setOverDataIndex] = useState(0);
  const max = {
    zIndex: 10,
    opacity: 1,
  };
  const min = {
    zIndex: 9,
    opacity: 0.7,
  };

  useEffect(() => {
    const setNewListCard = () => {
      const newCard = data.slice(0, 5).map((card, index) => {
        return {
          ...card,
          index: index,
          styles: {
            zIndex:
              Math.floor(data.length / 2) === index ? max.zIndex : min.zIndex,
            left: `${index * 140}px`,
          },
        };
      });

      setOverDataIndex(Math.floor(data.length / 2));
      setListCard(newCard);
      setDefaultListCard(newCard);
    };
    setNewListCard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const setNewOverCard = () => {
      if (!R.isEmpty(listCard)) {
        if (overDataIndex >= 0) {
          let _listCard = [...listCard];
          listCard
            .filter((filter, index) => {
              return (
                filter.styles.zIndex === max.zIndex || index === overDataIndex
              );
            })
            .forEach((item) => {
              _listCard[item.index] = {
                ...item,
                styles: {
                  ...item.styles,
                  zIndex:
                    item.index === overDataIndex ? max.zIndex : min.zIndex,
                },
              };
            });
          setListCard(_listCard);
        } else {
          setListCard(defaultListCard);
        }
      }
    };
    setNewOverCard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overDataIndex]);

  const renderCard = () => {
    return (
      <>
        {!R.isNil(listCard) && !R.isEmpty(listCard)
          ? listCard.map((card) => {
              return (
                <Styles.card
                  key={card.index}
                  opacity={card.styles ? card.styles.opacity : null}
                  onMouseOver={() => {
                    setOverDataIndex(card.index);
                  }}
                  onMouseLeave={() => {
                    setOverDataIndex(Math.floor(data.length / 2));
                  }}
                  style={{
                    ...card.styles,
                    transform:
                      overDataIndex === card.index ? `scale(1.2, 1.2)` : null,
                    opacity:
                      overDataIndex === card.index ? max.opacity : min.opacity,
                  }}
                >
                  {card.content}
                </Styles.card>
              );
            })
          : null}
      </>
    );
  };

  return (
    <Styles.container
    // left={data.length <= 6 ? `${100 / data.length}%` : null}
    >
      {renderCard()}
    </Styles.container>
  );
};

export default Carousel;
