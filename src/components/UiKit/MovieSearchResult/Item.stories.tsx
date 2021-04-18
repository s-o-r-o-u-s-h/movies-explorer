import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Item from './Item';

export default {
  title: 'MovieSearch/Item',
  component: Item,
} as Meta;

const Template: Story<React.ComponentProps<typeof Item>> = args => (
  <Item {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  item: {
    id: 51,
    title: 'Godzilla vs. Kong',
    release_date: '2021-03-24',
    poster_path:
      'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
  },
  onPress: () => {},
};
