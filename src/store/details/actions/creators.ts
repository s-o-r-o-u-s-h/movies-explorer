import DetailsTypes from '../types';
import MovieDetailsRaw from '../../../models/MovieDetailsRaw';

export type DetailsActionTypes =
  | { type: DetailsTypes.DETAILS_LOADING }
  | {
      type: DetailsTypes.DETAILS_FAILURE;
      payload: {
        error: string;
      };
    }
  | {
      type: DetailsTypes.DETAILS_SUCCESS;
      payload: {
        data: MovieDetailsRaw;
      };
    };

export const createDetailsLoadingAction = (): DetailsActionTypes => ({
  type: DetailsTypes.DETAILS_LOADING,
});

export const createDetailsSuccessAction = (
  data: MovieDetailsRaw,
): DetailsActionTypes => ({
  type: DetailsTypes.DETAILS_SUCCESS,
  payload: {
    data,
  },
});

export const createDetailsFailureAction = (
  error: string,
): DetailsActionTypes => ({
  type: DetailsTypes.DETAILS_FAILURE,
  payload: {
    error,
  },
});
