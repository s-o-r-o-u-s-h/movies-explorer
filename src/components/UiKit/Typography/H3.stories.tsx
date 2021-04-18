import * as React from 'react';
import { Story } from '@storybook/react';

import H3 from './H3';

export default {
  title: 'Typography/H3',
  component: H3,
};

const Template: Story<React.ComponentProps<typeof H3>> = args => (
  <H3 {...args}>Title</H3>
);

export const H3Story = Template.bind({});
