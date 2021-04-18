import * as React from 'react';
import { Story } from '@storybook/react';

import H1 from './H1';

export default {
  title: 'Typography/H1',
  component: H1,
};

const Template: Story<React.ComponentProps<typeof H1>> = args => (
  <H1 {...args}>Title</H1>
);

export const H1Story = Template.bind({});
