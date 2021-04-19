import {
  createDetailsFailureAction,
  createDetailsLoadingAction,
  createDetailsSuccessAction,
} from './creators';
import DetailsTypes from '../types';
import MovieDetailsRaw from '../../../models/MovieDetailsRaw';

describe('details action creators', () => {
  it('should create an action to load details', () => {
    const expectedAction = {
      type: DetailsTypes.DETAILS_LOADING,
    };
    expect(createDetailsLoadingAction()).toEqual(expectedAction);
  });

  it('should create an action for error', () => {
    const errorMessage = 'mocked-string';
    const expectedAction = {
      type: DetailsTypes.DETAILS_FAILURE,
      payload: {
        error: errorMessage,
      },
    };
    expect(createDetailsFailureAction(errorMessage)).toEqual(expectedAction);
  });

  it('should create an action to add movie details', () => {
    const data: MovieDetailsRaw = {
      movieItem: {
        title: 'mocked-title',
        genres: [{ id: 1, name: 'mocked-genre' }],
        production_countries: [{ name: 'USA', iso_3166_1: 'us' }],
        overview: 'mocked-overview',
        poster_path: 'mocked-path',
        release_date: '2021-02-01',
        runtime: 110,
      },
      crew: [],
      cast: [],
    };
    const expectedAction = {
      type: DetailsTypes.DETAILS_SUCCESS,
      payload: {
        data,
      },
    };
    expect(createDetailsSuccessAction(data)).toEqual(expectedAction);
  });
});
