import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

function SideNavBar({handleLogOut}) {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
    <Layout className="layout" style={{minHeight:'100vh'}}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item >Home</Menu.Item>

      <Menu.Item  onClick={handleLogOut} style={{textAlign:'center'}}>logout</Menu.Item>
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Welcome To The Homepage</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by Diana Ndinda Nyamai</Footer>
  </Layout>
    </div>
  )
}

export default SideNavBar
