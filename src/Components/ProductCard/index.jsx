import React from "react";
import { Card } from "antd";
import Styled from "./styled";
import { useSelector } from "react-redux";

const { Meta } = Card;

const ProductCard = ({ listProduct = [] }) => {
  const language = useSelector((state) => state.language);

  return listProduct ? (
    <Styled.ProductCardContainer>
      {listProduct.map((product) => {
        return (
          <Card
            hoverable
            onClick={() => {
              console.log("product", product);
            }}
          >
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            <Styled.InfoContainer>
              {/* <img
                
                alt="pin1"
                height={"20px"}
                resizeMode="contain"
              /> */}

              <div>
                <img
                  src={`http://${product.image}`}
                  alt={product.name_en}
                  style={{ width: 250, height: "auto" }}
                  draggable={false}
                />
              </div>

              <Styled.ProductNameText>
                {language ? product[`name_${language}`] : product.name_en}
              </Styled.ProductNameText>
            </Styled.InfoContainer>
          </Card>
        );
      })}
    </Styled.ProductCardContainer>
  ) : null;
};

export default ProductCard;
