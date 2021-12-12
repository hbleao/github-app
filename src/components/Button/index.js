/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Component = ({ onClick, type, bgColor, children }) => {
  return (
    <button type={type} className={`button ${bgColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = memo(Component);

Component.defaultProps = {
  type: 'button',
  bgColor: 'is-green',
};

Component.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['is-green', 'is-purple']),
};
