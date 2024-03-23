import styled from "styled-components";

export default {
  PrevResultLotteryContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  `,

  PrevResultLotteryHeader: styled.p`
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 500;
    margin: 20px 0px;
  `,
};
