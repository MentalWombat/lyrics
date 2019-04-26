import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-testing-library';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: 'artist name',
      track: 'track title',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getLyrics({...this.state});
    this.setState({
      artist: 'artist name',
      track: 'track title',
    })
  }

  render() {
    return(
      <form data-testid="form" className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <input data-testid="form-artist" className="form-control mr-sm-2" type="text" value={this.state.artist} name="artist" required onChange={this.handleChange} />
        <input data-testid="form-track" className="form-control mr-sm-2" type="text" value={this.state.track} name="track" required onChange={this.handleChange} />
        <button data-testid="submit" className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    )
  }
}  

Search.propTypes = {
  getLyrics: PropTypes.func.isRequired,
}

export default Search;
