/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Page } from './Page';

import { pagination } from '@/utils/pagination';

export const Pagination = ({ total, activePage, pageLink, onClick }) => {
  return (
    <ul className="pagination">
      {pagination({ total, activePage }).map(page => (
        <li
          className={`pagination__item ${activePage === page ? 'active' : ''}`}
          key={page}
        >
          <Page
            className="pagination__link"
            page={page}
            pageLink={pageLink.replace('%page%', page)}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
};

Pagination.defaultProps = {
  total: undefined,
  activePage: undefined,
  pageLink: '',
  onClick: undefined,
};

Pagination.propTypes = {
  total: PropTypes.any,
  activePage: PropTypes.any,
  pageLink: PropTypes.string,
  onClick: PropTypes.func,
};
