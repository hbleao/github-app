import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Button } from '../Button';

export const InputSearch = ({
  value,
  onChange,
  onClick,
  placeholder,
  error,
}) => {
  return (
    <div className="inputSearch">
      <input
        className={`inputSearch__field ${error ? 'is-error' : ''}`}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      <Button onClick={onClick} bgColor="is-green">
        Pesquisar
      </Button>
      {error && (
        <span className="inputSearch__error-message">
          O usuário {value} não existe!
        </span>
      )}
    </div>
  );
};

InputSearch.defaultProps = {
  placeholder: '',
  error: false,
};

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  error: PropTypes.bool,
};
