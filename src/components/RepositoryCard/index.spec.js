import React from 'react';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import { RepositoryCard } from '.';

const makeSut = ({ content, onClick = () => null }) => {
  return render(<RepositoryCard content={content} onClick={onClick} />);
};

const content = <p>facebook</p>;

describe('RepositoryCard', () => {
  it('should be able to render component correctly', () => {
    makeSut({ content });
    const repositoryName = screen.getByText(/facebook/);
    expect(repositoryName).toBeTruthy();
  });

  it('should be able to click the component one time', () => {
    const onClick = jest.fn();

    makeSut({ onClick, content });

    const repositoryCard = document.querySelector('.repositoryCard');
    user.click(repositoryCard);

    expect(onClick).toBeCalled();
  });

  it('should be able to click the component three times', () => {
    const onClick = jest.fn();

    makeSut({ onClick, content });

    const repositoryCard = document.querySelector('.repositoryCard');
    user.click(repositoryCard);
    user.click(repositoryCard);
    user.click(repositoryCard);

    expect(onClick).toBeCalledTimes(3);
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(
      <RepositoryCard
        content={<div>repository content</div>}
        onClick={() => jest.fn()}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
