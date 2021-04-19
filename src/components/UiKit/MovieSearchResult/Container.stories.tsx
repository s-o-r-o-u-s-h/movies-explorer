import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Container from './Container';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  height: 1px;
`;

export default {
  title: 'MovieSearch/Container',
  component: Container,
  decorators: [
    Story => (
      <MemoryRouter>
        <StyledContainer>
          <Story />
        </StyledContainer>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<React.ComponentProps<typeof Container>> = args => (
  <Container {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  items: [
    {
      id: 51,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    {
      id: 52,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
    {
      id: 53,
      title: 'Godzilla vs. Kong',
      release_date: '2021-03-24',
      poster_path:
        'https://image.tmdb.org/t/p/w400/inNN466SKHNjbGmpfhfsaPQNleS.jpg',
    },
  ],
  loading: false,
};
