import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout } from 'antd';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import UploadReport from './Components/UploadReport';
import ViewReport from './Components/ViewReport';

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
              <Route path="/upload" component={UploadReport} />
              <Route path="/view" component={ViewReport} />
            </Content>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
