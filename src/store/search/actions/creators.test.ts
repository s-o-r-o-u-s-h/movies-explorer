import {
  createSearchLoadingAction,
  createSearchFailureAction,
  createSearchSuccessAction,
} from './creators';
import SearchTypes from '../types';
import MoviePartial from '../../../models/api/MoviePartial';

describe('search action creators', () => {
  it('should create an action to load search', function () {
    const expectedAction = {
      type: SearchTypes.SEARCH_LOADING,
    };
    expect(createSearchLoadingAction()).toEqual(expectedAction);
  });

  it('should create an action for error', function () {
    const errorMessage = 'mocked-string';
    const expectedAction = {
      type: SearchTypes.SEARCH_FAILURE,
      payload: {
        error: errorMessage,
      },
    };
    expect(createSearchFailureAction(errorMessage)).toEqual(expectedAction);
  });

  it('should create an action to add search results', () => {
    const data: MoviePartial[] = [
      {
        title: 'mocked-title',
        poster_path: 'mocked-path',
        release_date: '2020-02-01',
        id: 10,
      },
    ];
    const expectedAction = {
      type: SearchTypes.SEARCH_SUCCESS,
      payload: {
        data,
      },
    };
    expect(createSearchSuccessAction(data)).toEqual(expectedAction);
  });
});
