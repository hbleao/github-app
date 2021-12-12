/* eslint-disable no-use-before-define */
import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Title } from '.';

const makeSut = ({ children, className }) => {
  render(<Title className={className}>{children}</Title>);
};

describe('Title', () => {
  it('should be able render correctly', () => {
    makeSut({ children: 'Title default' });

    const titleTextDefault = screen.getByText(/Title default/gi);
    expect(titleTextDefault).toBeTruthy();
  });

  it('should be able to render component with text confirm', () => {
    makeSut({ children: 'Github Actions' });

    const titleTextDefault = screen.getByText(/github actions/gi);
    expect(titleTextDefault).toBeTruthy();
  });

  it('should be able to render component with custom className', () => {
    const className = 'custom-class';
    const children = 'Github Actions';

    makeSut({ className, children });

    const titleWithCustomClassName = document.querySelector(`.${className}`);
    expect(titleWithCustomClassName).toBeTruthy();
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(<Title>Github app</Title>);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
