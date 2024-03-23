import styled from "styled-components";
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

  RandomNumberContainer: styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 30px;
  `,

  NumberContainer: styled.div`
    background: ${(props) =>
      props.status === "wait"
        ? "white"
        : props.status === "random"
        ? "white"
        : "lightgreen"};
    // border: 1px solid #f0f0f0;
    border: 1px solid
      ${(props) =>
        props.status === "wait"
          ? "blue"
          : props.status === "random"
          ? "blue"
          : "gray"};
    border-radius: 10px;
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 50px;
    margin: 0px 2px;
  `,
};
