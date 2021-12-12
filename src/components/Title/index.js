import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Component = ({ className, children }) => {
  return <h1 className={`title ${className}`}>{children}</h1>;
};

export const Title = memo(Component);

Component.defaultProps = {
  className: '',
};

Component.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};
