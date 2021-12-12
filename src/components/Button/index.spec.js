import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import user from '@testing-library/user-event';

import { Button } from '.';

const makeSut = ({
  onClick = () => null,
  styles = 'is-green',
  children = 'click here',
}) => {
  render(
    <Button onClick={onClick} styles={styles}>
      {children}
    </Button>
  );
};

describe('Button', () => {
  it('should be able render correctly', () => {
    makeSut({});

    const buttonTextDefault = screen.getByText(/click here/gi);
    expect(buttonTextDefault).toBeTruthy();
  });

  it('should be able to render component with text confirm', () => {
    makeSut({ children: 'confirm' });

    const buttonTextDefault = screen.getByText(/confirm/gi);
    expect(buttonTextDefault).toBeTruthy();
  });

  it('should be able to click into button', () => {
    const handleClick = jest.fn();
    makeSut({ onClick: handleClick });

    const buttonTextDefault = screen.getByText(/click here/gi);
    user.click(buttonTextDefault);
    user.click(buttonTextDefault);

    expect(handleClick).toBeCalledTimes(2);
  });

  it('should be able to render a component Button with styles default props', () => {
    makeSut({});

    const buttonWithStyleDefault = document.querySelector('.is-green');
    expect(buttonWithStyleDefault).toBeTruthy();
  });

  it('should be able to render snapshot', () => {
    const handleClick = jest.fn();
    const component = renderer.create(
      <Button onClick={handleClick}>Click!</Button>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
