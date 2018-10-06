import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import UploadWorkLogReport from './Components/UploadWorkLogReport';
import ViewPayrollReport from './Components/ViewPayrollReport';

import './App.scss';

const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <NavBar />
            <Content>
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
