import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Header, Sider } = Layout;
// Window width of 500px
const mobileWidthBreak = 500;

class NavBar extends Component {
  constructor(props) {
    super(props);
    const { selectedKeys } = this.props;
    this.state = {
      selectedKeys,
      windowWidth: window.innerWidth,
    };
    this.setSelectedKeys = this.setSelectedKeys.bind(this);
  }

  setSelectedKeys(key) {
    this.setState({
      selectedKeys: key,
    });
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const { selectedKeys } = this.state;
    const { windowWidth } = this.state;

    return (
      <>
        { windowWidth > mobileWidthBreak ?
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={selectedKeys}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/" onClick={() => this.setSelectedKeys(['/'])}><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="/upload-worklog-report" onClick={() => this.setSelectedKeys(['/upload-worklog-report'])}><Link to="/upload-worklog-report">Upload Report</Link></Menu.Item>
              <Menu.Item key="/view-payroll-report" onClick={() => this.setSelectedKeys(['/view-payroll-report'])}><Link to="/view-payroll-report">View Payroll Report</Link></Menu.Item>
            </Menu>
          </Header>
          :
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu
              theme="dark"
              mode="inline"
              selectedKeys={selectedKeys}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="/" onClick={() => this.setSelectedKeys(['/'])}><Link to="/">Home</Link></Menu.Item>
              <Menu.Item key="/upload-worklog-report" onClick={() => this.setSelectedKeys(['/upload-worklog-report'])}><Link to="/upload-worklog-report">Upload Report</Link></Menu.Item>
              <Menu.Item key="/view-payroll-report" onClick={() => this.setSelectedKeys(['/view-payroll-report'])}><Link to="/view-payroll-report">View Payroll Report</Link></Menu.Item>
            </Menu>
          </Sider>
        }
      </>
    );
  }
}

NavBar.propTypes = {
  selectedKeys: PropTypes.arrayOf(PropTypes.string),
};

NavBar.defaultProps = {
  selectedKeys: ['/'],
};
export default NavBar;
