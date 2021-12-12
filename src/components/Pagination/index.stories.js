import React from 'react';

import { Pagination } from '.';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

const Template = args => <Pagination {...args} />;

export const WithoutProps = Template.bind({});

export const WithTotalAndActivePage = Template.bind({});
WithTotalAndActivePage.args = {
  total: 8,
  activePage: 2,
  pageLink: 'http://mypage.com/page/%page%',
  onClick: page => window.alert(page),
};

export const WithPageLink = Template.bind({});
WithPageLink.args = {
  total: 8,
  activePage: 2,
  pageLink: 'http://mypage.com/page/%page%',
};

export const WithCallbackFunction = Template.bind({});
WithCallbackFunction.args = {
  total: 8,
  activePage: 5,
  onClick: page => window.alert(page),
};
