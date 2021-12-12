import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import user from '@testing-library/user-event';

import { InputSearch } from '.';

const makeSut = ({
  value = 'initialValue',
  onChange = () => null,
  onClick = () => null,
  placeholder,
  error = false,
}) => {
  render(
    <InputSearch
      placeholder={placeholder}
      onClick={onClick}
      value={value}
      onChange={onChange}
      error={error}
    />
  );
};

describe('InputSearch', () => {
  it('should be able to render component with initial value', () => {
    const value = 'hbleao';
    const handleOnChange = jest.fn();

    makeSut({
      value,
      onChange: handleOnChange,
    });

    const inputSearch = screen.getByDisplayValue('hbleao');
    expect(inputSearch).toBeTruthy();
  });

  it('should be able to render component with placeholder', () => {
    const placeholder = 'insert your github username';
    makeSut({ placeholder });

    const inputSearch = screen.getByPlaceholderText(placeholder);
    expect(inputSearch).toBeTruthy();
  });

  it('should be able to insert value into inputSearch', () => {
    const handleOnChange = jest.fn();

    makeSut({
      onChange: handleOnChange,
    });

    const inputSearch = document.querySelector('.inputSearch__field');
    user.type(inputSearch, 'hbleao');

    expect(inputSearch).toBeTruthy();
  });

  it('should not be able to find repository into github', () => {
    const handleOnChange = jest.fn();

    makeSut({
      onChange: handleOnChange,
      error: true,
    });

    const inputSearch = document.querySelector('.inputSearch__field');
    user.type(inputSearch, 'hbleao');

    const buttonSubmit = screen.getByText(/Pesquisar/gi);
    user.click(buttonSubmit);

    const errorMessage = document.querySelector('.inputSearch__error-message');

    expect(errorMessage).toBeTruthy();
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(
      <InputSearch
        value="value"
        onChange={() => null}
        onClick={() => null}
        placeholder="insert your github username"
        error
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
