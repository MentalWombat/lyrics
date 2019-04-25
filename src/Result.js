import React from 'react';
import PropTypes from 'prop-types';

const Result = props => (
  props.text ? (
  <>
    <h2 data-testid="output-title">{props.title}</h2>
    <div data-testid="output-lyrics" className="lyrics">{props.text}</div>
  </>
  ) : null
)

Result.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Result;