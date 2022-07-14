import styled from "styled-components";
import responsive from "../../utils/responsive";
import { getLocalStorage } from "../../utils/storage";

export default {
  timeline: styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    &:after {
      content: "";
      position: absolute;
      left: 50%;
      background-color: lightgray;
      top: 0;
      bottom: 0;
      width: 6px;
    }

    @media ${responsive.sm} {
      &:after {
        left: 5%;
      }
    }
  `,
  container: styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
    left: ${(props) => (props.rightSide ? `50%` : null)};

    container-circle {
      content: "";
      position: absolute;
      width: 25px;
      height: 25px;
      top: 15px;
      right: ${(props) => (props.rightSide ? null : `-17px`)};
      left: ${(props) => (props.rightSide ? `-9px` : null)};
      background-color: white;
      border: 4px solid #ff9f55;
      border-radius: 50%;
      z-index: 1;
    }

    @media ${responsive.sm} {
      width: 100%;
      left: 5%;

      container-circle {
        right: 0px;
        left: -10px;
      }
    }
  `,
  content: styled.div`
    padding: 5% 10%;
    background-color: ${(props) =>
      getLocalStorage(`theme`) === `light` ? `lightgray` : `white`};
    color: black;
    border-radius: 10px;
    position: relative;

    content-arrow {
      content: "";
      position: absolute;
      z-index: 9;
      top: 8px;
      border: medium solid white;
      left: ${(props) => (props.rightSide ? `-10px` : `100%`)};
      border-width: ${(props) =>
        props.rightSide ? `10px 10px 10px 0px` : `10px 0px 10px 10px`};
      border-color: transparent white transparent;
    }

    @media ${responsive.sm} {
      content-arrow {
        left: -10px;
        border-width: 10px 10px 10px 0px;
      }
    }
  `,
};
