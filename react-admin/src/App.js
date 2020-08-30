import React from 'react';
import './App.css';
import IRoute from './router/index'
import Nav from './components/Nav/Nav'
import CommonHeader from './components/Header/Header'
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout-admin">
        <Sider
          className="sider"
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Nav />
        </Sider>

        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0, position: "relative" }} >
            <CommonHeader />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <IRoute />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
