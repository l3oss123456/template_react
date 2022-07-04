import styled from "styled-components";
import responsive from "../../utils/responsive";
import { colors } from "../../cores/theme/index";
import { getLocalStorage } from "../../utils/storage";

export default {
  PageContainer: styled.div`
    padding: 130px 40px 20px;
    background-color: ${() =>
      getLocalStorage(`theme`) === `light` ? colors.white : colors.primary};
    color: ${() =>
      getLocalStorage(`theme`) === "light" ? colors.black : colors.white};
    width: 100vw;
    height: 100vh;
    overflow: auto;
    transition: all 0.5s ease-out;
  `,
  MenuContainer: styled.div`
    background-color: ${() =>
      getLocalStorage(`theme`) === "light"
        ? colors.black
        : colors.blackRussian};
    position: -webkit-fixed;
    position: fixed;
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

    @media ${responsive.xs} {
      display: flex;
      justify-content: flex-end;
    }
  `,
  SideNav: styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background: #fcfcfc;
    overflow-x: hidden;
    transition: 0.5s;

    header-side-nav-container {
      width: 100%;
      padding: 5% 5% 0%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      color: ${colors.black};
    }

    content-side-nav-container {
      padding: 8% 5% 0%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      span {
        color: white;
        font-size: 25px;
        color: ${colors.black};
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          opacity: 0.3;
        }
      }
    }

    footer-side-nav-container {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 0% 5% 5%;
      display: flex;
      flex-wrap: wrap;
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
