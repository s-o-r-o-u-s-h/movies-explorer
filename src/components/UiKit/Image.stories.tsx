import * as React from 'react';
import { Meta, Story } from '@storybook/react';

import Image from './Image';

export default {
  title: 'Image box',
  component: Image,
} as Meta;

const Template: Story<React.ComponentProps<typeof Image>> = args => (
  <Image {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  alt: 'Movie 1',
  url: 'https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
};
