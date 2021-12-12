import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const RepositoryCard = ({ content, onClick }) => {
  return (
    <button className="repositoryCard" onClick={onClick}>
      {content}

      <svg
        className="repositoryCard__iconArrow"
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 10.5L3 6L8 1.5L6.60066 -4.44801e-08L6.67556e-07 6L6.60066 12L8 10.5Z" />
      </svg>
    </button>
  );
};

RepositoryCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired,
};
