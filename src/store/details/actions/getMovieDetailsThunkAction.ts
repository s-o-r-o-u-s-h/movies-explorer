import { TAction } from '../../store';
import {
  createDetailsFailureAction,
  createDetailsLoadingAction,
  createDetailsSuccessAction,
} from './creators';

export const getMovieDetailsThunkAction = (
  id: number,
): TAction<Promise<void>> => async (dispatch, getState, { api }) => {
  dispatch(createDetailsLoadingAction());
  try {
    const movieItem = await api.getMovie(id);
    const { cast, crew } = await api.getMovieCredits(id);
    dispatch(createDetailsSuccessAction({ movieItem, cast, crew }));
  } catch (e) {
    dispatch(createDetailsFailureAction(e.message));
  }
};
