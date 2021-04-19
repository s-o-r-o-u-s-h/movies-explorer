import {
  createTrendsFailureAction,
  createTrendsLoadingAction,
  createTrendsSuccessAction,
} from './creators';
import TrendsTypes from '../types';
import MoviePartial from '../../../models/api/MoviePartial';

describe('trends action creators', () => {
  it('should create an action to load trends', function () {
    const expectedAction = {
      type: TrendsTypes.TRENDS_LOADING,
    };
    expect(createTrendsLoadingAction()).toEqual(expectedAction);
  });

  it('should create an action for error', function () {
    const errorMessage = 'mocked-string';
    const expectedAction = {
      type: TrendsTypes.TRENDS_FAILURE,
      payload: {
        error: errorMessage,
      },
    };
    expect(createTrendsFailureAction(errorMessage)).toEqual(expectedAction);
  });

  it('should create an action to add trends', () => {
    const data: MoviePartial[] = [
      {
        title: 'mocked-title',
        poster_path: 'mocked-path',
        release_date: '2020-02-01',
        id: 10,
      },
    ];
    const expectedAction = {
      type: TrendsTypes.TRENDS_SUCCESS,
      payload: {
        data,
      },
    };
    expect(createTrendsSuccessAction(data)).toEqual(expectedAction);
  });
});
