import React from 'react';
import PropTypes from 'prop-types';

const Result = props => (
  props.text ? (
  <>
    <h2 data-testid="output-title">{props.titleArtist} — {props.titleTrack}</h2>
    <div data-testid="output-lyrics" className="lyrics">{props.text}</div>
  </>
  ) : null
)

Result.propTypes = {
  titleArtist: PropTypes.string.isRequired,
  titleTrack: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Result;