import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchInput from './SearchInput';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  height: 40px;
`;

export default {
  title: 'Search input',
  component: SearchInput,
  decorators: [
    Story => (
      <MemoryRouter>
        <Provider store={store}>
          <StyledContainer>
            <Story />
          </StyledContainer>
        </Provider>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story<React.ComponentProps<typeof SearchInput>> = args => (
  <SearchInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Enter a text...',
  onChangeQuery: () => {},
};
