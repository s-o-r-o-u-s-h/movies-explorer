import { TAction } from '../../store';
import {
  createSearchLoadingAction,
  createSearchSuccessAction,
} from './creators';
import { createDetailsFailureAction } from '../../details/actions/creators';

export const searchMoviesThunkAction = (name: string): TAction<void> => async (
  dispatch,
  getState,
  { api },
) => {
  dispatch(createSearchLoadingAction());
  try {
    const response = await api.findMovies(name);
    dispatch(createSearchSuccessAction(response.results));
  } catch (e) {
    dispatch(createDetailsFailureAction(e.message));
  }
};
