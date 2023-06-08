import React from 'react';
import PropTypes from 'prop-types';

export const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button type="button" onCLick={onClick} className="iconButton" {...allyProps}>
    {children}
  </button>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onCLick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
