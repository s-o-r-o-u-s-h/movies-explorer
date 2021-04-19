import TrendsTypes from '../types';
import MoviePartial from '../../../models/api/MoviePartial';

export type TrendsActionTypes =
  | { type: TrendsTypes.TRENDS_LOADING }
  | {
      type: TrendsTypes.TRENDS_FAILURE;
      payload: {
        error: string;
      };
    }
  | {
      type: TrendsTypes.TRENDS_SUCCESS;
      payload: {
        data: MoviePartial[];
      };
    };

export const createTrendsLoadingAction = (): TrendsActionTypes => ({
  type: TrendsTypes.TRENDS_LOADING,
});

export const createTrendsSuccessAction = (
  data: MoviePartial[],
): TrendsActionTypes => ({
  type: TrendsTypes.TRENDS_SUCCESS,
  payload: {
    data,
  },
});

export const createTrendsFailureAction = (
  error: string,
): TrendsActionTypes => ({
  type: TrendsTypes.TRENDS_FAILURE,
  payload: {
    error,
  },
});
