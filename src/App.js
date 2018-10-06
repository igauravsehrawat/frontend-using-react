import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import './App.scss';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { Layout } from 'antd';
const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <NavBar />
      </Layout>
      <Content>
        <Home />
      </Content>
      </div>
    );
  }
}

export default App;
