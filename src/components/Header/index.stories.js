import React from 'react';

import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClick: null,
};

export const WithButton = Template.bind({});
