import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Images from "../Images";
import { Strings } from "../../cores/locals";
import { editLanguage } from "../../actions/language";
import { editTheme } from "../../actions/theme";
import { useOutsideAlerter } from "../../helper/global";
import { colors } from "../../cores/theme";
import Styles from "./styles";

const { Option } = Select;

const MenuBar = ({ children }) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const theme = useSelector((state) => state.theme);

  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);

  const HamburgerRef = useRef(null);
  useOutsideAlerter(HamburgerRef, () => {
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
      <Styles.HamburgerSection
        onClick={() => setDisplayHamburgerMenu(true)}
        ref={HamburgerRef}
      >
        <MenuOutlined
          style={{
            cursor: `pointer`,
            fontSize: `1.2rem`,
            color: colors.white,
          }}
        />
        <hamburger-menu-container
          style={{
            opacity: displayHamburgerMenu === true ? 1 : 0,
          }}
        >
          {listMenu.map((menu, index) => {
            return (
              <Link to={menu.link} key={index}>
                <Styles.Menu
                  onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
                  style={{
                    color: colors.black,
                    marginTop:
                      index > 0 && index < listMenu.length ? `5px` : null,
                  }}
                >
                  {menu.name}
                </Styles.Menu>
              </Link>
            );
          })}

          <div style={{ marginTop: 30 }}>
            <Select
              defaultValue={language}
              onChange={(value) => dispatch(editLanguage(value))}
            >
              <Option value="en">EN</Option>
              <Option value="th">TH</Option>
            </Select>

            <Select
              defaultValue={theme}
              onChange={(value) => dispatch(editTheme(value))}
              style={{ marginLeft: 20 }}
            >
              <Option value="light">Light</Option>
              <Option value="dark">Dark</Option>
            </Select>
            {renderLanguageDropdown()}
          </div>
        </hamburger-menu-container>
      </Styles.HamburgerSection>
    );
  };
  const renderLanguageDropdown = () => {
    return (
      <Styles.SelectedSection>
        <Select
          defaultValue={language}
          onChange={(value) => dispatch(editLanguage(value))}
          style={{ marginLeft: 20 }}
        >
          <Option value="en">EN</Option>
          <Option value="th">TH</Option>
        </Select>
      </Styles.SelectedSection>
    );
  };
  const renderThemeDropdown = () => {
    return (
      <Styles.SelectedSection>
        <Select
          defaultValue={theme}
          onChange={(value) => dispatch(editTheme(value))}
          style={{ marginLeft: 20 }}
        >
          <Option value="light">Light</Option>
          <Option value="dark">Dark</Option>
        </Select>
      </Styles.SelectedSection>
    );
  };

  return (
    <>
      <Styles.MenuContainer theme={theme}>
        {renderLogo()}
        <div style={{ display: `flex`, alignItems: "center" }}>
          {renderMenu()}
          {renderHamburgerMenu()}
          {renderLanguageDropdown()}
          {renderThemeDropdown()}
        </div>
      </Styles.MenuContainer>
      <Styles.PageContainer theme={theme}>{children}</Styles.PageContainer>
    </>
  );
};
export default MenuBar;
