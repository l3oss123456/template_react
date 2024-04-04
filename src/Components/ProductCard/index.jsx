import React from "react";
import { Card } from "antd";
import Styled from "./styled";

const { Meta } = Card;

const ProductCard = ({ listProduct = [] }) => {
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
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        );
      })}
    </Styled.ProductCardContainer>
  ) : null;
};

export default ProductCard;
