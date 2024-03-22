import * as R from "ramda";
import styled from "styled-components";
import responsive from "../../Services/Utils/responsive";
import helper from "../../Services/Utils/helper";

export default {
  PageContainer: styled.div`
    font-family: ${(props) => props.theme.fontFamily.primary} !important;
    padding: 130px 8% 20px;
    background-color: ${(props) =>
      helper.useGetTheme() === `light`
        ? props.theme.colors.white
        : props.theme.colors.primary};
    color: ${(props) =>
      helper.useGetTheme() === `light`
        ? props.theme.colors.black
        : props.theme.colors.white};
    width: 100vw;
    min-height: 100vh;
    overflow: auto;
    word-wrap: break-word;
    transition: all 0.5s ease-out;

    @media ${responsive.xs} {
      padding: 80px 8% 20px;
    }
  `,
  MenuContainer: styled.div`
    background-color: ${(props) =>
      helper.useGetTheme() === `light`
        ? props.theme.colors.black
        : props.theme.colors.blackRussian};
    position: -webkit-fixed;
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 15px 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s ease-out;
    z-index: 100;

    @media ${responsive.md} {
      padding: 15px 3%;
    }
    @media (max-width: 300px) {
      padding: 15px 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  `,
  LogoSection: styled.div`
    cursor: pointer;

    @media ${responsive.md} {
      display: none;
    }
  `,
  MenuSection: styled.div`
    display: flex;

    @media ${responsive.md} {
      display: none;
    }
  `,
  HamburgerSection: styled.div`
    display: none;
    position: relative;

    @media ${responsive.md} {
      display: flex;
      justify-content: flex-end;
    }
  `,
  SideNav: styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${(props) =>
      helper.useGetTheme() === `light`
        ? props.theme.colors.black
        : props.theme.colors.white};
    overflow-x: hidden;
    transition: 0.5s;

    header-side-nav-container {
      width: 100%;
      padding: 5% 5% 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }

    content-side-nav-container {
      margin: 8% 5% 0%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      a {
        font-family: ${(props) => props.theme.fontFamily.primary};
        font-size: ${(props) => props.theme.fontSize.subTitle};
        // line-height:${(props) => props.theme.fontSize * 1.5}
        color: ${(props) =>
          helper.useGetTheme() === `light`
            ? props.theme.colors.white
            : props.theme.colors.black};
        margin: 10px 0px;
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
      gap: 20px;
    }
  `,
  BtnSection: styled.div`
    @media ${responsive.md} {
      display: none;
    }
  `,
  Menu: styled.div`
    font-size: ${(props) => props.theme.fontSize.text};
    font-family: ${(props) => props.theme.fontFamily.primary};
    cursor: pointer;
    transition: 0.2s ease-in;
    color: ${(props) =>
      R.isNil(props.hamburger)
        ? props.theme.colors.white
        : helper.useGetTheme() === `light`
        ? props.theme.colors.white
        : props.theme.colors.black};

    &:hover {
      opacity: 0.6;
    }
  `,
};
