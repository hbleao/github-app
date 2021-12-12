import React from 'react';

import { InputSearch } from '.';

export default {
  title: 'Components/InputSearch',
  component: InputSearch,
  argTypes: {
    onChange: { action: 'clicked' },
    onClick: { action: 'clicked' },
  },
};

const Template = args => <InputSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Your repository',
};
