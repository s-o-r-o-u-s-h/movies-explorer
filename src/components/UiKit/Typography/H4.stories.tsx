import * as React from 'react';
import { Story } from '@storybook/react';

import H4 from './H4';

export default {
  title: 'Typography/H4',
  component: H4,
};

const Template: Story<React.ComponentProps<typeof H4>> = args => (
  <H4 {...args}>Title</H4>
);

export const H4Story = Template.bind({});
