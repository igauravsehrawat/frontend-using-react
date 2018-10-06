import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header } = Layout;

class NavBar extends Component {
  render() {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}>
          <Menu.Item key='1'><Link to='/'>Home</Link></Menu.Item>
          <Menu.Item key='2'><Link to='/upload'>Upload Report</Link></Menu.Item>
          <Menu.Item key='3'><Link to='/view'>View Report</Link></Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default NavBar;
