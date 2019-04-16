import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <h1 className="navbar-brand mr-auto">Lyrics Finder</h1>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="artist name" name="artist" required/>
            <input className="form-control mr-sm-2" type="text" placeholder="track title" name="track" required/>
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div className="container">
          <div className="lyrics">
            <h2>title</h2>
            <div>some text</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
