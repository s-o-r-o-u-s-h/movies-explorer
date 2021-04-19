import * as React from 'react';
import GlobalStyle from '../src/components/GlobalStyle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faCalculator,
  faCoffee,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faCoffee, faSearch, faCalculator);

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
