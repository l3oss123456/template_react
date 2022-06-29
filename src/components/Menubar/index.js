import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Menubar.modules.css";

const MenuBar = ({ defaultSelectedKeys = "1", children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [displayHamburgerMenu, setDisplayHamburgerMenu] = useState(false);
  const collapsedIconStyle = {
    cursor: "pointer",
    fontSize: 20,
  };
  const listMenu = [
    {
      name: `home`,
      link: `/`,
    },
    {
      name: `about-us`,
      link: `/about-us`,
    },
    {
      name: `contact`,
      link: `/contact`,
    },
  ];

  const renderLogo = () => {
    return (
      <div className="logo-section">
        <img
          src="/images/garbriel.jpeg"
          alt="..."
          style={{
            width: 80,
          }}
        />
      </div>
    );
  };
  const renderMenu = () => {
    return (
      <div className="menu-section">
        {listMenu.map((menu, index) => {
          return (
            <Link to={menu.link}>
              <div
                key={index}
                className="menu"
                style={{
                  marginLeft:
                    index > 0 && index < listMenu.length ? `20px` : null,
                }}
              >
                {menu.name}
              </div>
            </Link>
          );
        })}
      </div>
    );
  };
  const renderHamburgerMenu = () => {
    return (
      <div
        className="hamburger-section"
        onClick={() => setDisplayHamburgerMenu(!displayHamburgerMenu)}
      >
        <MenuOutlined style={{ cursor: `pointer`, fontSize: `1.2rem` }} />
        <div
          className="hamburger-menu-container"
          style={{
            // background: `lightgray`,
            // position: `absolute`,
            // right: 0,
            // bottom: -110,
            // transition: `all 0.3s ease-out`,
            // padding: 10,
            // width: `max-content`,
            // display: `flex`,
            // flexDirection: `column`,
            opacity: displayHamburgerMenu === true ? 1 : 0,
          }}
        >
          {listMenu.map((menu, index) => {
            return (
              <Link to={menu.link}>
                <div
                  key={index}
                  className="menu"
                  style={{
                    marginTop:
                      index > 0 && index < listMenu.length ? `5px` : null,
                  }}
                >
                  {menu.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="menu-container">
        {renderLogo()}
        {renderMenu()}
        {renderHamburgerMenu()}
      </div>

      <div className="container">{children}</div>
    </>
  );
};
export default MenuBar;

// const { Header, Sider, Content } = Layout;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px 0px 30px 0px;
// `;

// const ImageLayout = styled.img`
//   height: 100px;
//   width: 100px;
// `;

// const MenuBar = ({ defaultSelectedKeys = "1", children }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const collapsedIconStyle = {
//     cursor: "pointer",
//     fontSize: 20,
//   };
//   return (
//     <Layout>
//       <Sider
//         theme="light"
//         trigger={null}
//         collapsible
//         collapsed={collapsed}
//         breakpoint="lg"
//         collapsedWidth="80"
//       >
//         <ImageContainer>
//           {!collapsed && <ImageLayout src={"image"} />}
//         </ImageContainer>
//         <div className="logo" />
//         <Menu
//           theme="light"
//           mode="inline"
//           defaultSelectedKeys={defaultSelectedKeys}
//         >
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             nav 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             nav 2
//           </Menu.Item>
//           <Menu.Item key="3" icon={<UploadOutlined />}>
//             nav 3
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout
//         className="site-layout"
//         style={{
//           height: window.innerHeight,
//           position: "relative",
//           backgroundColor: "white",
//         }}
//       >
//         <Header style={{ paddingLeft: 30, backgroundColor: "white" }}>
//           <div>
//             {collapsed ? (
//               <MenuUnfoldOutlined
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ ...collapsedIconStyle }}
//               />
//             ) : (
//               <MenuFoldOutlined
//                 onClick={() => setCollapsed(!collapsed)}
//                 style={{ ...collapsedIconStyle }}
//               />
//             )}
//           </div>
//         </Header>
//         <Content
//           style={{
//             margin: "24px 16px",
//             padding: 24,
//             minHeight: 280,
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default MenuBar;
