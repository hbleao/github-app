import React from 'react';

import { Profile } from '.';

export default {
  title: 'Components/Profile',
  component: Profile,
};

const Template = args => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Jhon Doe',
  avatarUrl: 'https://avatars.dicebear.com/api/adventurer-neutral/dhon.svg',
  alternativeTexAvatarUrl: 'image avatar',
  bio: 'Has been fake repository',
  size: 'is-sm',
};
