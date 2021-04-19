import * as React from 'react';

import { Meta, Story } from '@storybook/react';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    Story => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
} as Meta;

const Template: Story<React.ComponentProps<typeof Header>> = args => (
  <Header {...args} />
);

export const Basic = Template.bind({});
