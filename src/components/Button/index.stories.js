/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = args => <Button {...args} />;

export const PurpleButton = Template.bind({});
PurpleButton.args = {
  children: 'Click in the purple button!',
  type: 'button',
  bgColor: 'is-purple',
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  children: 'Click in the green button!',
  type: 'button',
  bgColor: 'is-green',
};
