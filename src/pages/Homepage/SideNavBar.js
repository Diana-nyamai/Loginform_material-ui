import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

function SideNavBar({handleLogOut}) {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
    <Layout className="layout" style={{minHeight:'100vh'}}>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
      <Menu.Item >Home</Menu.Item>
      <Menu.Item >About</Menu.Item>
      <Menu.Item >FAQs</Menu.Item>
      <Menu.Item >Gallery</Menu.Item>

      <Menu.Item  onClick={handleLogOut} style={{textAlign:'center'}}>logout</Menu.Item>
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content"><h1>Welcome To The Homepage</h1></div>
      <p>This will be the photography Gallery</p>
      
    </Content>
    <Footer style={{ textAlign: 'center' }}>Created by Diana Ndinda Nyamai: &copy; {new Date().getFullYear()} Copyright</Footer>
  </Layout>
    </div>
  )
}

export default SideNavBar
