import * as React from 'react';

import { Story } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story<React.ComponentProps<typeof Header>> = args => (
  <Header {...args} />
);

export const Basic = Template.bind({});
