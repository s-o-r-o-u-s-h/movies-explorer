import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import IconButton from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: ['search', 'coffee', 'calculator'],
      },
    },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof IconButton>> = args => (
  <IconButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  icon: 'search',
  ariaLabel: 'search',
};
