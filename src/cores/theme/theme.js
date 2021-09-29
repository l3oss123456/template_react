import styled from "styled-components";
import { colors, fontFamily } from "../../cores/theme/index";

export default {
  ScreenContainer: styled.div`
    padding: 30px 100px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${fontFamily.primary};

    @media (min-width: 100px) {
      margin: 0px 0px 0px;
    }
  `,
};
