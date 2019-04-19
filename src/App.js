import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import './App.css';
import { apiKey } from './key';
const baseUrl = 'https://orion.apiseeds.com/api/music/lyric/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: 'artist name',
      track: 'track title',
      titleArtist: '',
      titleTrack: '',
      text: null,
      loading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.getLyrics = this.getLyrics.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  getLyrics(e) {
    e.preventDefault();
    const { artist, track } = this.state;
    this.setState({
      loading: true
    });
    window.fetch(baseUrl + encodeURIComponent(artist) + "/" + encodeURIComponent(track) + "?apikey=" + apiKey)
    .then(res => res.json())
    .then(json => {
      // console.log(json);
      this.setState({
        artist: 'artist name',
        track: 'track title',
        titleArtist: json.result.artist.name,
        titleTrack: json.result.track.name,
        text: json.result.track.text,
        loading: false
      });
    })
  }

  render() {
    return (
      <div className="App">
        <div data-testid="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <h1 data-testid="navbar-title" className="navbar-brand mr-auto">Lyrics Finder</h1>
          <Search artist={this.state.artist} track={this.state.track} handleChange={this.handleChange} getLyrics={this.getLyrics} />
        </div>
        <div data-testid="container" className="container">
          <div data-testid="output" className="output">
            {this.state.loading ? "Loading..." : <Result titleArtist={this.state.titleArtist} titleTrack={this.state.titleTrack} text={this.state.text} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
