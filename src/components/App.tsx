import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faCalculator,
  faCoffee,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

library.add(fas, faCoffee, faSearch, faCalculator);

const App: React.VFC = () => {
  return <div>Hello World</div>;
};

export default App;
