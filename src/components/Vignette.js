import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** Pixels in height */
  height: PropTypes.number,
  /** Pixels in width */
  width: PropTypes.number,
};

const defaultProps = {
  height: 100,
  width: 200,
};

const Vignette = ({ height, width }) => (
  <div
    className="vignette"
    style={{
      position: 'relative',
      background: 'url(img/about.jpg)',
      top: 0,
      textAlign: 'center',
      width,
      height,
    }}
  />
);

Vignette.propTypes = propTypes;
Vignette.defaultProps = defaultProps;

export default Vignette;