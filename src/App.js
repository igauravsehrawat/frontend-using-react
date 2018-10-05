import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import './App.css';
import NavBar from './Components/NavBar';
import { Layout } from 'antd';



class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <NavBar />
      </Layout>
      </div>
    );
  }
}

export default App;
