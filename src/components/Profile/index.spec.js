import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import { Profile } from '.';

const makeSut = ({
  name = '',
  githubUrl = '',
  avatarUrl = '',
  alternativeTexAvatarUrl = '',
  bio = '',
  size,
}) => {
  render(
    <Profile
      size={size}
      name={name}
      githubUrl={githubUrl}
      avatarUrl={avatarUrl}
      alternativeTexAvatarUrl={alternativeTexAvatarUrl}
      bio={bio}
    />
  );
};

const user = {
  name: 'Jhon doe',
  avatarUrl: 'https://avatars.githubusercontent.com/u/35975531?v=4',
  githubUrl: 'https://api.github.com/users/hbleao',
  alternativeTexAvatarUrl: 'Imagem o usuário',
  bio: 'Frontend developer',
};

describe('Profile', () => {
  it('should be able to render profile with name property', () => {
    makeSut({
      name: user.name,
    });

    const username = screen.getByText(/Jhon doe/gi);
    expect(username).toBeTruthy();
  });

  it('should be able to render profile with userBio property', () => {
    makeSut({
      bio: user.bio,
    });

    const userBio = screen.getByText(user.bio);
    expect(userBio).toBeTruthy();
  });

  it('should be able to render profile with avatarUrl property', () => {
    makeSut({
      name: user.name,
      avatarUrl: user.avatarUrl,
    });
    const profileImage = document.querySelector('.profile__avatar');
    expect(profileImage).toHaveProperty('src', user.avatarUrl);
  });

  it('should be able to click into profile component', () => {
    makeSut({
      name: user.name,
      avatarUrl: user.avatarUrl,
    });

    const profileImage = document.querySelector('.profile__avatar');
    expect(profileImage).toHaveProperty('src', user.avatarUrl);
  });

  it('should be able to render component with medium size', () => {
    makeSut({
      size: 'is-md',
      name: user.name,
      avatarUrl: user.avatarUrl,
      alternativeTexAvatarUrl: user.alternativeTexAvatarUrl,
      bio: user.bio,
    });
    const profileAvatarMedium = document.querySelector('.is-md');
    expect(profileAvatarMedium).toBeTruthy();
  });

  it('should be able to render component with small size', () => {
    makeSut({
      size: 'is-sm',
      name: user.name,
      avatarUrl: user.avatarUrl,
      alternativeTexAvatarUrl: user.alternativeTexAvatarUrl,
      bio: user.bio,
    });
    const profileAvatarSmall = document.querySelector('.is-sm');
    expect(profileAvatarSmall).toBeTruthy();
  });

  it('should be able to render snapshot', () => {
    const component = renderer.create(
      <Profile
        size="is-md"
        name={user.name}
        githubUrl={user.githubUrl}
        avatarUrl={user.avatarUrl}
        bio={user.bio}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
