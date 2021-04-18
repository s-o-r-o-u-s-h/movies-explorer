import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import ResponsiveImage from './ResponsiveImage';

export default {
  title: 'Images/Responsive',
  component: ResponsiveImage,
} as Meta;

const Template: Story<React.ComponentProps<typeof ResponsiveImage>> = args => (
  <ResponsiveImage {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  src: 'https://image.tmdb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
  size: 250,
};
