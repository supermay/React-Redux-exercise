import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'
import RecipesContainer from './components/RecipesContainer'



class App extends Component {
  render() {
    return (
      <div className="App">
          <Title content='String Content' />
          <RecipesContainer />
      </div>
    );
  }
}

export default App;
