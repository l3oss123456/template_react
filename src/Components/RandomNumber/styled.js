import styled from "styled-components";
import helper from "../../Services/Utils/helper";
import responsive from "../../Services/Utils/responsive";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 12px 18px -6px gray;
    width: 80vw;
    padding: 20px 10px;

    @media ${responsive.sm} {
      width: 95vw;
    }
  `,

  DateContainer: styled.div`
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.fontSize.title};
    font-weight: 500;
  `,

  RandomNumberContainer: styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 30px;
  `,

  NumberContainer: styled.div`
    background: ${(props) =>
      props.status === "wait"
        ? "gray"
        : props.status === "random"
        ? "white"
        : "lightgreen"};
    border: 1px solid black;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 50px;
  `,

  ResultContainer: styled.div`
    width: 100%;
    display: flex;
    gap: 0px;
  `,

  ResultSection: styled.div`
    width: 50%;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.text};
    color: ${(props) => props.theme.textThemeColor[helper.useGetTheme()]};
  `,
};
