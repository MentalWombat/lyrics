import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form data-testid="form" className="form-inline my-2 my-lg-0">
        <input data-testid="form-artist" className="form-control mr-sm-2" type="text" placeholder="artist name" name="artist" required />
        <input data-testid="form-track" className="form-control mr-sm-2" type="text" placeholder="track title" name="track" required />
        <button data-testid="submit" className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

export default Search;
