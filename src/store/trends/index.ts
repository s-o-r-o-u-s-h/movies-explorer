import { TrendsActionTypes } from './actions/creators';
import TrendsTypes from './types';
import MoviePartial from '../../models/api/MoviePartial';

interface TrendsState {
  loading: boolean;
  data: MoviePartial[];
  error: string;
}

const initialState: TrendsState = {
  loading: false,
  data: [],
  error: '',
};

export default function trendsReducer(
  state = initialState,
  action: TrendsActionTypes,
): TrendsState {
  switch (action.type) {
    case TrendsTypes.TRENDS_LOADING:
      return { ...initialState, loading: true };
    case TrendsTypes.TRENDS_SUCCESS:
      const { data } = action.payload;
      let dataState: MoviePartial[];

      if (data.length > 10) {
        dataState = data.slice(0, 14);
      } else {
        dataState = data;
      }

      dataState = dataState.map(movie => ({
        ...movie,
        poster_path: movie.poster_path
          ? process.env['REACT_APP_TMDB_IMG_URL'] + movie.poster_path
          : (process.env['REACT_APP_FALLBACK_IMAGE_URL'] as string),
      }));

      return { ...initialState, data: dataState };
    case TrendsTypes.TRENDS_FAILURE:
      return { ...initialState, error: action.payload.error };
    default:
      return state;
  }
}
