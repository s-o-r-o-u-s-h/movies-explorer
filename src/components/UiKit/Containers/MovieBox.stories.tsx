import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import MovieBox from './MovieBox';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Containers/MovieBox',
  component: MovieBox,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<React.ComponentProps<typeof MovieBox>> = args => (
  <MovieBox {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  item: {
    title: 'Godzilla vs. Kong',
    release_date: '2021-03-24',
    poster_path: '/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    id: 22,
  },
};
