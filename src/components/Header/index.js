import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import LogoSvg from '../../assets/images/logo.svg';
import ArrowLeftSvg from '../../assets/images/arrowLeft.svg';

const Component = ({ onClick }) => {
  return (
    <header className="header">
      <LogoSvg className="header__logo" />

      {!!onClick && (
        <div className="header__link">
          <ArrowLeftSvg className="header__link-icon" />
          <button className="header__link-text" onClick={onClick}>
            Voltar
          </button>
        </div>
      )}
    </header>
  );
};

export const Header = memo(Component);

Component.defaultProps = {
  onClick: null,
};

Component.propTypes = {
  onClick: PropTypes.func,
};
