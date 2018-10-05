import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class NavBar extends Component {
  render() {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
          <Menu.Item key='1'>Home</Menu.Item>
          <Menu.Item key='2'>Upload Report</Menu.Item>
          <Menu.Item key='3'>View Report</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default NavBar;
