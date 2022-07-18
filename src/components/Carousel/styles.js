import styled from "styled-components";
import { useGetTheme } from "../../Services/Utils/helper";

export default {
  container: styled.div`
    position: relative;
    left: ${(props) => (props.left ? props.left : `0%`)};
  `,
  card: styled.div`
    position: absolute;
    border-radius: 10px;
    padding: 10px;
    width: 200px;
    height: auto;
    opacity: ${(props) => (props.opacity ? props.opacity : 0.7)};
    transition: 0.5s all ease-out;
    background-color: ${(props) => {
      return useGetTheme() === `light`
        ? props.theme.colors.white
        : props.theme.colors.luckyPoint;
    }};
    border: 1px solid lightgray;
  `,
};
