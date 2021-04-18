import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import MovieDetailsInfo from './MovieDetailsInfo';

export default {
  title: 'MovieDetails/Info',
  component: MovieDetailsInfo,
} as Meta;

const Template: Story<React.ComponentProps<typeof MovieDetailsInfo>> = args => (
  <MovieDetailsInfo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  item: {
    country: 'Great Britain',
    director: 'Dominic Cook',
    year: '2020',
    cast: 'Benedict Cumberbatch, Rachel Brosnahe',
    duration: '111 minutes',
    genre: 'Drama, Thriller',
    summary:
      'During the Cold War, Colonel Oleg Penkovsky of the General Staff of the Russian Defense Ministry got in touch with Grill Winn, a British businessman spy who is interested in constant contact with Moscow.',
  },
};
