import styled from "styled-components";
import responsive from "../../utils/responsive";
import { colors } from "../../cores/theme/index";

export default {
  PageContainer: styled.div`
    padding: 40px 40px 0px;
    background-color: ${(props) =>
      props.theme && props.theme === "light" ? colors.white : colors.primary};
    color: ${(props) =>
      props.theme && props.theme === "light" ? colors.black : colors.white};
    width: 100vw;
    height: 100vh;
    overflow: auto;
    transition: 0.5s ease-out;
  `,
  MenuContainer: styled.div`
    background-color: ${(props) =>
      props.theme && props.theme === "light"
        ? colors.black
        : colors.blackRussian};
    // position: fixed;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 100vw;
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease-out;

    @media (max-width: 300px) {
      padding: 15px 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  `,
  LogoSection: styled.div`
    cursor: pointer;

    @media (max-width: 300px) {
      display: none;
    }
  `,
  MenuSection: styled.div`
    display: flex;

    @media (max-width: 576px) {
      display: none;
    }
  `,
  HamburgerSection: styled.div`
    display: none;
    position: relative;

    hamburger-menu-container {
      background-color: white;
      color: black;
      position: absolute;
      right: 0px;
      bottom: -180px;
      transition: all 0.2s ease-out;
      padding: 10px 20px;
      width: max-content;
      display: flex;
      flex-direction: column;
    }

    @media ${responsive.xs} {
      display: flex;
      justify-content: flex-end;
    }
  `,
  SelectedSection: styled.div`
    @media ${responsive.xs} {
      display: none;
    }
  `,
  Menu: styled.div`
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in;
    color: white;

    &:hover {
      opacity: 0.6;
    }
  `,
};
