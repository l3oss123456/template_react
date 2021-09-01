import styled from "styled-components";
import THEME from "../../cores/theme/index";

export default {
  screenContainer: styled.div`
    margin: 30px 100px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${THEME.fontFamily.primary};

    @media (min-width: 100px) {
      margin: 0px 0px 0px;
    }
  `,
};
