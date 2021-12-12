import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { RepositoryInfo } from '.';

describe('RepositoryInfo', () => {
  it('should be able to render', () => {
    expect(RepositoryInfo).toBeInstanceOf(Function);
  });

  it('should be able to render component with property value', () => {
    render(<RepositoryInfo value="1808" description="Stars" />);

    const valueProperty = screen.getByText('1808');
    expect(valueProperty).toBeTruthy();
  });

  it('should be able to render component with property description', () => {
    render(<RepositoryInfo value="1808" description="Stars" />);

    const descriptionProperty = screen.getByText('Stars');
    expect(descriptionProperty).toBeTruthy();
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(
      <RepositoryInfo value="1808" description="Stars" />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
