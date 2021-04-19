import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faCalculator,
  faCoffee,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

import Header from './UiKit/Header/Header';
import { CenteredLoading } from './UiKit/LoadingIndicator';

library.add(fas, faCoffee, faSearch, faCalculator);

const Main = React.lazy(() => import('./Pages/MainPage'));
const MovieDetails = React.lazy(() => import('./Pages/MainPage'));
const NotFound = React.lazy(() => import('./Pages/MainPage'));

const App: React.VFC = () => {
  return (
    <Router>
      <Header />
      <React.Suspense fallback={<CenteredLoading />}>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
