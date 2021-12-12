import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { Header } from '.';

describe('Header', () => {
  it('should be able to render', () => {
    expect(Header).toBeInstanceOf(Function);
  });

  it('should be able to see header with logo', () => {
    render(<Header />);

    const logoElement = document.querySelector('.header__logo');
    expect(logoElement).toBeTruthy();
  });

  it('should be able to receive an property onClick', () => {
    const onClick = jest.fn();
    render(<Header onClick={onClick} />);

    const linkElement = screen.getByText(/voltar/gi);
    user.click(linkElement);

    expect(onClick).toBeCalled();
  });

  it('should be able to press button five times', () => {
    const onClick = jest.fn();
    render(<Header onClick={onClick} />);

    const linkElement = screen.getByText(/voltar/gi);
    user.click(linkElement);
    user.click(linkElement);
    user.click(linkElement);
    user.click(linkElement);
    user.click(linkElement);

    expect(onClick).toBeCalledTimes(5);
  });

  it('should be able to press button five times', () => {
    render(<Header />);

    const linkElement = screen.queryByText(/voltar/gi);
    expect(linkElement).toBeNull();
  });

  it('should be able to render snapshot', () => {
    const onClick = jest.fn();
    const component = renderer.create(<Header onClick={onClick} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
