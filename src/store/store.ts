import {
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import api from '../api';
import detailsReducer from './details';
import searchReducer from './search';
import trendsReducer from './trends';

export const rootReducer = combineReducers({
  details: detailsReducer,
  search: searchReducer,
  trends: trendsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type TAction<T> = ThunkAction<
  T,
  RootState,
  { api: ReturnType<typeof api> },
  AnyAction
>;

// Adding redux-thunk
const middlewares = [thunkMiddleware.withExtraArgument({ api: api() })];
const middlewareEnhancer = applyMiddleware(...middlewares);
// Adding redux-devtools-extension
const composedEnhancers =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(middlewareEnhancer)
    : middlewareEnhancer;

export default createStore(rootReducer, composedEnhancers);
