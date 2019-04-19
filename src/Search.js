import React from 'react';

const Search = props => (
  <form data-testid="form" className="form-inline my-2 my-lg-0" onSubmit={props.getLyrics}>
    <input data-testid="form-artist" className="form-control mr-sm-2" type="text" placeholder={props.artist} name="artist" required onChange={props.handleChange} />
    <input data-testid="form-track" className="form-control mr-sm-2" type="text" placeholder={props.track} name="track" required onChange={props.handleChange} />
    <button data-testid="submit" className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>
)

export default Search;
