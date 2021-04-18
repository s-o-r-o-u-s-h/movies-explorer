import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import MovieDetails from './MovieDetails';

export default {
  title: 'MovieDetails/Container',
  component: MovieDetails,
} as Meta;

const Template: Story<React.ComponentProps<typeof MovieDetails>> = args => (
  <MovieDetails {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  item: {
    title: 'Courier Spy Movie',
    image:
      'https://films.bz/img-medium/uploads/posts/2021-04/1618756460_lrtesnerixad51af51ag158sjh3s531g513ag.jpg',
    country: 'Great Britain',
    director: 'Dominic Cook',
    year: '2020',
    cast: 'Benedict Cumberbatch, Rachel Brosnahe',
    duration: '111 minutes',
    genre: 'Drama, Thriller',
    summary:
      'During the Cold War, Colonel Oleg Penkovsky of the General Staff of the Russian Defense Ministry got in touch with Grill Winn, a British businessman spy who is interested in constant contact with Moscow.',
  },
  loading: false,
};
