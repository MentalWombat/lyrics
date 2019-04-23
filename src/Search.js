import React from 'react';
import PropTypes from 'prop-types';

const Search = props => (
  <form data-testid="form" className="form-inline my-2 my-lg-0" onSubmit={props.getLyrics}>
    <input data-testid="form-artist" className="form-control mr-sm-2" type="text" placeholder={props.artist} name="artist" required onChange={props.handleChange} />
    <input data-testid="form-track" className="form-control mr-sm-2" type="text" placeholder={props.track} name="track" required onChange={props.handleChange} />
    <button data-testid="submit" className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
  </form>
)

Search.propTypes = {
  getLyrics: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  track: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Search;
