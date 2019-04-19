import React from 'react';

const Result = props => (
  props.text ? (
  <>
    <h2 data-testid="output-title">{props.titleArtist} — {props.titleTrack}</h2>
    <div data-testid="output-lyrics" className="lyrics">{props.text}</div>
  </>
  ) : null
)

export default Result;