import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import BaseImage from './BaseImage';

export default {
  title: 'Images/BaseImage',
  component: BaseImage,
} as Meta;

const Template: Story<React.ComponentProps<typeof BaseImage>> = args => (
  <BaseImage {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  src: 'https://image.tmdb.org/t/p/w400/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
  size: 400,
};
