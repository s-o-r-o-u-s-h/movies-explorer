import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import MoviesSection from './MoviesSection';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Containers/MoviesSection',
  component: MoviesSection,
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<React.ComponentProps<typeof MoviesSection>> = args => (
  <MoviesSection {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Popular movies',
  items: [
    {
      id: 100,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w500/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    {
      id: 101,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w500/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    {
      id: 102,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w500/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    {
      id: 103,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w500/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
  ],
  loading: false,
};
