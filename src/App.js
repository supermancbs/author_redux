import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateAuthor from './components/CreateAuthors'
import DisplayAuthors from './components/DisplayAuthors'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateAuthor/>
        <DisplayAuthors/>


      </div>
    );
  }
}

export default App;
