import React from 'react';

import { RepositoryInfo } from '.';

export default {
  title: 'Components/RepositoryInfo',
  component: RepositoryInfo,
};

const Template = args => <RepositoryInfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '1500',
  description: 'Issues abertas',
};
