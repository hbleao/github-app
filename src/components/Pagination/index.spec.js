import React from 'react';
import { render } from '@testing-library/react';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { Pagination } from '.';

describe('Pagination', () => {
  it('should be able to render the component correctly', () => {
    render(<Pagination />);

    const defaultPagination =
      document.querySelector('.pagination__link').textContent;

    expect(defaultPagination).toBe('1');
  });

  it('should be able to render the component with total pages correctly', () => {
    render(<Pagination total={10} activePage={2} />);

    const defaultPagination =
      document.querySelectorAll('.pagination__link')[4].textContent;

    expect(defaultPagination).toBe('10');
  });

  it('should be able to render the component with pagination correctly', () => {
    render(<Pagination total={10} activePage={2} />);

    const activePage = document.querySelector('.active a').textContent;

    expect(activePage).toBe('2');
  });

  it('should be able to click in the activePage', () => {
    const onClick = jest.fn();
    render(<Pagination total={10} activePage={2} onClick={onClick} />);

    const activePage = document.querySelector('.pagination__link');
    user.click(activePage);

    expect(onClick).toBeCalled();
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(
      <Pagination total={10} activePage={2} onClick={() => jest.fn()} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
