import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faCalculator,
  faCoffee,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Provider } from 'react-redux';

import Header from './Header/Header';
import { CenteredLoading } from './UiKit/LoadingIndicator';
import store from '../store/store';
import { ToastContainer } from 'react-toastify';

library.add(fas, faCoffee, faSearch, faCalculator);

const Main = React.lazy(() => import('./Pages/MainPage'));
const MovieDetails = React.lazy(() => import('./Pages/MovieDetailsPage'));
const NotFound = React.lazy(() => import('./Pages/NotFoundPage'));

const App: React.VFC = () => {
  return (
    <Provider store={store}>
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
      <ToastContainer />
    </Provider>
  );
};

export default App;
