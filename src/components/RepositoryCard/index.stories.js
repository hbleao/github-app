import React from 'react';

import { RepositoryCard } from '.';

const Text = () => <p>Text demonstration</p>;

export default {
  title: 'Components/RepositoryCard',
  component: RepositoryCard,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <RepositoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: <Text />,
};
