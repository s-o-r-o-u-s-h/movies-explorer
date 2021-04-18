import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import LoadingIndicator from './LoadingIndicator';

export default {
  title: 'Loading',
  component: LoadingIndicator,
} as Meta;

const Template: Story<React.ComponentProps<typeof LoadingIndicator>> = args => (
  <LoadingIndicator {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: 'lg',
};
