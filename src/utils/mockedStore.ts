import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../api';

const middlewares = [thunk.withExtraArgument({ api: api() })];
const mockStore = configureMockStore(middlewares);

export const store = mockStore({
  details: { loading: false, error: '', item: null },
  trends: { loading: false, error: '', data: [] },
  search: { loading: false, error: '', data: [] },
});
