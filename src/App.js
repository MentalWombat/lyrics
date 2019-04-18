import React, { Component } from 'react';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div data-testid="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <h1 data-testid="navbar-title" className="navbar-brand mr-auto">Lyrics Finder</h1>
          <Search />
        </div>
        <div data-testid="container" className="container">
          <div data-testid="output" className="output">
            {/* Loading... */}
            {/* <h2 data-testid="output-title">title</h2>
            <div data-testid="output-lyrics">some text</div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
