/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Dots = ({ className }) => <span className={className}>...</span>;

export const Page = ({ page, pageLink, onClick, className }) => {
  const Component = page === '...' ? Dots : 'a';

  const handleClick = !onClick
    ? null
    : e => {
        e.preventDefault();
        onClick(page);
      };

  return (
    <Component href={pageLink} onClick={handleClick} className={className}>
      {page}
    </Component>
  );
};

Dots.propTypes = {
  className: PropTypes.string,
};

Dots.defaultProps = {
  className: '',
};

Page.defaultProps = {
  pageLink: '',
  onClick: undefined,
  className: '',
};

Page.propTypes = {
  page: PropTypes.any.isRequired,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
