import styled from "styled-components";
import helper from "../../Services/Utils/helper";

export default {
  ResultContainer: styled.div`
    width: 100%;
    display: flex;
    gap: 0px;
  `,

  ResultSection: styled.div`
    width: 50%;
    height: 50px;
    border: 1px solid #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.text};
    color: ${(props) => props.theme.textThemeColor[helper.useGetTheme()]};
  `,
};
