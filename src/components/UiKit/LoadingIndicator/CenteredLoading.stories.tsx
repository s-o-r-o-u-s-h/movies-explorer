import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import CenteredLoading from './CenteredLoading';

export default {
  title: 'LoadingIndicators/Centered',
  component: CenteredLoading,
} as Meta;

const Template: Story<React.ComponentProps<typeof CenteredLoading>> = args => (
  <CenteredLoading {...args} />
);

export const Centered = Template.bind({});
