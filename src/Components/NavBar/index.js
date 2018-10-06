import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header } = Layout;

class NavBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedKeys: ['1'],
    }
  }
  componentWillMount = () => {
    this.setState({
      selectedKeys: this.props.selectedKeys,
    });
  }

  setSelectedKeys = (key) => {
    this.setState({
      selectedKeys: key,
    })
  }

  render() {
    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={this.state.selectedKeys}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/" onClick={() => this.setSelectedKeys(['/'])}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item key="/upload-worklog-report" onClick={() => this.setSelectedKeys(['/upload-worklog-report'])}><Link to="/upload-worklog-report">Upload Report</Link></Menu.Item>
          <Menu.Item key="/view-payroll-report" onClick={() => this.setSelectedKeys(['/view-payroll-report'])}><Link to="/view-payroll-report">View Payroll Report</Link></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

NavBar.propTypes = {
  selectedKeys: PropTypes.array,
}

NavBar.defaultProps = {
  selectedKeys: ['1']
}
export default NavBar;
