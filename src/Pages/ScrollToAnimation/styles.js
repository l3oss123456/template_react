import styled from "styled-components";
import { useGetTheme } from "../../Services/Utils/helper";

export default {
  boxes: styled.div`
    margin: 20px;
    margin-top: 150px;
    background-color: ${(props) =>
      useGetTheme() === `light`
        ? props.theme.colors.submit
        : props.theme.colors.neonBlue90}
    };
    overflow: hidden;
    height: 200px;
    max-height: 35vh;
    box-shadow: 0px 12px 18px -6px black;
    border-radius: 10px;
    text-align: center;
  `,

  grids: styled.div`
    max-width: 80%;
    margin: auto;
  `,
};
