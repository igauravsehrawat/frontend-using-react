import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">Button</Button>
        </header>
      </div>
    );
  }
}

export default App;
