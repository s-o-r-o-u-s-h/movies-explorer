import * as React from 'react';

import { Story } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
};

const Template: Story<React.ComponentProps<typeof Heading>> = args => (
  <Heading {...args}>Heading</Heading>
);

export const HeadingStory = Template.bind({});
