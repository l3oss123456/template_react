import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// import { Link } from "react-router-dom";
// import { Strings } from "../../cores/locals/index";
// import Theme from "../../cores/theme/theme";
import styled from "styled-components";

const { Header, Sider, Content } = Layout;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px 30px 0px;
`;

const ImageLayout = styled.img`
  height: 100px;
  width: 100px;
`;

const MenuBar = ({ defaultSelectedKeys = "1", children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const collapsedIconStyle = {
    cursor: "pointer",
    fontSize: 20,
  };
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="80"
      >
        <ImageContainer>
          {!collapsed && <ImageLayout src={"image"} />}
        </ImageContainer>
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={defaultSelectedKeys}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          height: window.innerHeight,
          position: "relative",
          backgroundColor: "white",
        }}
      >
        <Header style={{ paddingLeft: 30, backgroundColor: "white" }}>
          <div>
            {collapsed ? (
              <MenuUnfoldOutlined
                onClick={() => setCollapsed(!collapsed)}
                style={{ ...collapsedIconStyle }}
              />
            ) : (
              <MenuFoldOutlined
                onClick={() => setCollapsed(!collapsed)}
                style={{ ...collapsedIconStyle }}
              />
            )}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default MenuBar;
