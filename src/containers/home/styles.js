import styled from "styled-components";

export default {
  screenContainer: styled.div`
    margin: 30px 100px 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 100px) {
      margin: 0px 0px 0px;
    }
  `,
};
