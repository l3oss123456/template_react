import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Images from "../Images";
import { Strings } from "../../cores/locals";
import { editLanguage } from "../../actions/language";
import { editTheme } from "../../actions/theme";
import { useOutsideAlerter, useWindowSize } from "../../helper/global";
import responsive from "../../utils/responsive";
import { colors } from "../../cores/theme";
import Styles from "./styles";

const { Option } = Select;

const MenuBar = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width.toString() > responsive.xs) {
      setDisplayHamburgerMenu(false);
    }
  }, [width]);

  const sideNavRef = useRef(null);
  useOutsideAlerter(sideNavRef, () => {
    setDisplayHamburgerMenu(false);
  });

  const listMenu = [
    {
      name: Strings.getString(`menubar.home`),
      link: `/`,
    },
    {
      name: Strings.getString(`menubar.aboutus`),
      link: `/about-us`,
    },
    {
      name: Strings.getString(`menubar.contact`),
      link: `/contact`,
    },
  ];

  const renderLogo = () => {
    return (
      <Link to={`/`}>
        <Styles.LogoSection>
          <Images name={`icon.logo`} />
        </Styles.LogoSection>
      </Link>
    );
  };
  const renderMenu = () => {
    return (
      <Styles.MenuSection>
        {listMenu.map((menu, index) => {
          return (
            <Link to={menu.link} key={index}>
              <Styles.Menu
                theme={theme}
                style={{
                  marginLeft:
                    index > 0 && index < listMenu.length ? `20px` : null,
                }}
              >
                {menu.name}
              </Styles.Menu>
            </Link>
          );
        })}
      </Styles.MenuSection>
    );
  };
  const renderHamburgerMenu = () => {
    return (
      <>
        <Styles.HamburgerSection
          onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
        >
          <MenuOutlined
            style={{
              cursor: `pointer`,
              fontSize: `1.2rem`,
              color: colors.white,
            }}
          />
        </Styles.HamburgerSection>

        <Styles.SideNav
          ref={sideNavRef}
          style={{
            width: displayHamburgerMenu === true ? `80vw` : `0vw`,
          }}
        >
          <header-side-nav-container>
            <Images name={`icon.logo`} width={60} height={60} />

            <CloseOutlined
              onClick={() => setDisplayHamburgerMenu(false)}
              style={{
                cursor: `pointer`,
                fontSize: `1.2rem`,
                color: colors.black,
              }}
            />
          </header-side-nav-container>

          <content-side-nav-container>
            {listMenu.map((menu, index) => {
              return (
                <Link to={menu.link} key={index}>
                  <span>{menu.name}</span>
                </Link>
              );
            })}
          </content-side-nav-container>

          <footer-side-nav-container>
            {languageDropdown()}
            {themeDropdown()}
          </footer-side-nav-container>
        </Styles.SideNav>
      </>
    );
  };
  const renderLanguageDropdown = () => {
    return (
      <Styles.SelectedSection>{languageDropdown()}</Styles.SelectedSection>
    );
  };
  const renderThemeDropdown = () => {
    return <Styles.SelectedSection>{themeDropdown()}</Styles.SelectedSection>;
  };
  const languageDropdown = () => {
    return (
      <Select
        value={language}
        onChange={(value) => dispatch(editLanguage(value))}
        style={{ marginLeft: 20 }}
      >
        <Option value="en">EN</Option>
        <Option value="th">TH</Option>
      </Select>
    );
  };
  const themeDropdown = () => {
    return (
      <Select
        value={theme}
        onChange={(value) => dispatch(editTheme(value))}
        style={{ marginLeft: 20 }}
      >
        <Option value="light">Light</Option>
        <Option value="dark">Dark</Option>
      </Select>
    );
  };

  return (
    <>
      <Styles.MenuContainer>
        {renderLogo()}
        <div style={{ display: `flex`, alignItems: "center" }}>
          {renderMenu()}
          {renderHamburgerMenu()}
          {renderLanguageDropdown()}
          {renderThemeDropdown()}
        </div>
      </Styles.MenuContainer>
      <Styles.PageContainer>{children}</Styles.PageContainer>
    </>
  );
};
export default MenuBar;
