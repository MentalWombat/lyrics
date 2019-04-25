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
      artistValue: 'artist name',
      trackValue: 'track title',
      title: '',
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
    const { artistValue, trackValue } = this.state;
    this.setState({
      artistValue,
      trackValue,
      loading: true,
    });
    window.fetch(baseUrl + encodeURIComponent(artistValue) + "/" + encodeURIComponent(trackValue) + "?apikey=" + apiKey)
    .then(res => {
      if (res.status !== 200) {
        this.setState({
          artistValue: 'artist name',
          trackValue: 'track title',
          title: '',
          text: 'Sorry, nothing found',
          loading: false
        });
        throw new Error ("Something's wrong, status is not 200");
      } else {
        res.json()
        .then(json => {
          console.log(json);
          this.setState({
            artistValue: 'artist name',
            trackValue: 'track title',
            title: `${json.result.artist.name} — ${json.result.track.name}`,
            text: json.result.track.text,
            loading: false
          });
        })
      }
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div data-testid="navbar" className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <h1 data-testid="navbar-title" className="navbar-brand mr-auto">Lyrics Finder</h1>
          <Search artistValue={this.state.artistValue} trackValue={this.state.trackValue} handleChange={this.handleChange} getLyrics={this.getLyrics} />
        </div>
        <div data-testid="container" className="container">
          <div data-testid="output" className="output">
            {this.state.loading ? "Loading..." : <Result title={this.state.title} text={this.state.text} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
