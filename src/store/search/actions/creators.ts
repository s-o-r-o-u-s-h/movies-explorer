import SearchTypes from '../types';
import MoviePartial from '../../../models/api/MoviePartial';

export type SearchActionTypes =
  | { type: SearchTypes.SEARCH_LOADING }
  | {
      type: SearchTypes.SEARCH_FAILURE;
      payload: {
        error: string;
      };
    }
  | {
      type: SearchTypes.SEARCH_SUCCESS;
      payload: {
        data: MoviePartial[];
      };
    };

export const createSearchLoadingAction = (): SearchActionTypes => ({
  type: SearchTypes.SEARCH_LOADING,
});

export const createSearchSuccessAction = (
  data: MoviePartial[],
): SearchActionTypes => ({
  type: SearchTypes.SEARCH_SUCCESS,
  payload: {
    data,
  },
});

export const createSearchFailureAction = (
  error: string,
): SearchActionTypes => ({
  type: SearchTypes.SEARCH_FAILURE,
  payload: {
    error,
  },
});
