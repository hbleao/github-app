import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const RepositoryInfo = ({ value, description }) => {
  return (
    <div className="RepositoryInfo">
      <p className="RepositoryInfo__value">{value}</p>
      <span className="RepositoryInfo__description">{description}</span>
    </div>
  );
};

RepositoryInfo.propTypes = {
  value: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
