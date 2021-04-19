import { TAction } from '../../store';
import {
  createTrendsFailureAction,
  createTrendsLoadingAction,
  createTrendsSuccessAction,
} from './creators';

export const getTrendsThunkAction = (): TAction<void> => async (
  dispatch,
  getState,
  { api },
) => {
  dispatch(createTrendsLoadingAction());
  try {
    const response = await api.discover();
    dispatch(createTrendsSuccessAction(response.results));
  } catch (e) {
    dispatch(createTrendsFailureAction(e.message));
  }
};
