import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import SmallText from './SmallText';

export default {
  title: 'Typography/SmallText',
  component: SmallText,
} as Meta;

const Template: Story<React.ComponentProps<typeof SmallText>> = args => (
  <SmallText {...args}>Small Text</SmallText>
);

export const Basic = Template.bind({});
