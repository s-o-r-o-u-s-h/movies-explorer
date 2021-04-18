import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchInput from './SearchInput';

export default {
  title: 'Search input',
  component: SearchInput,
} as Meta;

const Template: Story<React.ComponentProps<typeof SearchInput>> = args => (
  <SearchInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Enter a text...',
};
