import * as React from 'react';
import { Story } from '@storybook/react';

import H2 from './H2';

export default {
  title: 'Typography/H2',
  component: H2,
};

const Template: Story<React.ComponentProps<typeof H2>> = args => (
  <H2 {...args}>Title</H2>
);

export const H2Story = Template.bind({});
