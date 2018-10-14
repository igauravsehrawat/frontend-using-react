import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UploadWorkLogReport from './components/UploadWorkLogReport';
import ViewPayrollReport from './components/ViewPayrollReport';

import './App.scss';

const { Content } = Layout;
class App extends Component {
  constructor() {
    super();
    const selectedKeys = [`/${window.location.pathname.split('/')[1]}`];
    this.state = {
      selectedKeys,
    };
  }

  render() {
    const { selectedKeys } = this.state;
    return (
      <Router>
        <div className="App fade-in-left wave-full-parent-height">
          <Layout className="wave-full-parent-height">
            <NavBar
              selectedKeys={selectedKeys}
            />
            <Content className="wave-full-parent-height wave-overflow-auto">
              <Route exact path="/" component={Home} />
              <Route path="/upload-worklog-report" component={UploadWorkLogReport} />
              <Route path="/view-payroll-report" component={ViewPayrollReport} />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
