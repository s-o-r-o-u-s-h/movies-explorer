import * as React from 'react';
import { Story } from '@storybook/react';

import H6 from './H6';

export default {
  title: 'Typography/H6',
  component: H6,
};

const Template: Story<React.ComponentProps<typeof H6>> = args => (
  <H6 {...args}>Title</H6>
);

export const H4Story = Template.bind({});
