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
      title: '',
      text: null,
      loading: false
    }
    this.getLyrics = this.getLyrics.bind(this);
  }

  getLyrics(input) {
    // console.log({...data});
    const {artist, track} = {...input};
    this.setState({
      loading: true,
    });
    window.fetch(baseUrl + encodeURIComponent(artist) + "/" + encodeURIComponent(track) + "?apikey=" + apiKey)
    .then(res => {
      if (res.status !== 200) {
        this.setState({
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
          <Search getLyrics={this.getLyrics} />
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
