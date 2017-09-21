import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'


class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React</h2>
          <Title content='This is a website.'/>
      </div>
    );
  }
}

export default App;
