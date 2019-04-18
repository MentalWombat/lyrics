import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div data-testid="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <h1 data-testid="navbar-title" className="navbar-brand mr-auto">Lyrics Finder</h1>
          <form data-testid="form" className="form-inline my-2 my-lg-0">
            <input data-testid="form-artist" className="form-control mr-sm-2" type="text" placeholder="artist name" name="artist" required/>
            <input data-testid="form-track" className="form-control mr-sm-2" type="text" placeholder="track title" name="track" required/>
            <button data-testid="submit" className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
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
