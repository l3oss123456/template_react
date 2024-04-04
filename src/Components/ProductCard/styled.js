import styled from "styled-components";

export default {
  ProductCardContainer: styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: center;
  `,
  InfoContainer: styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 20px;
    font-size: ${(props) => props.theme.fontSize.subTitle};
  `,
  ProductNameText: styled.h2`
    font-size: ${(props) => props.theme.fontSize.subTitle};
    text-align: center;
  `,
};
