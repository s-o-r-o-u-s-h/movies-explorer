import * as React from 'react';
import { Story } from '@storybook/react';

import H5 from './H5';

export default {
  title: 'Typography/H5',
  component: H5,
};

const Template: Story<React.ComponentProps<typeof H5>> = args => (
  <H5 {...args}>Title</H5>
);

export const H4Story = Template.bind({});
