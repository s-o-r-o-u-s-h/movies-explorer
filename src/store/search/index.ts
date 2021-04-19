import { SearchActionTypes } from './actions/creators';
import SearchTypes from './types';
import MoviePartial from '../../models/api/MoviePartial';

interface SearchState {
  loading: boolean;
  data: MoviePartial[];
  error: string;
}

const initialState: SearchState = {
  loading: false,
  data: [],
  error: '',
};

export default function searchReducer(
  state = initialState,
  action: SearchActionTypes,
): SearchState {
  switch (action.type) {
    case SearchTypes.SEARCH_LOADING:
      return { ...initialState, loading: true };
    case SearchTypes.SEARCH_SUCCESS:
      const { data } = action.payload;
      const dataState = data.map(movie => ({
        ...movie,
        poster_path: process.env['REACT_APP_TMDB_IMG_URL'] + movie.poster_path,
      }));
      return { ...initialState, data: dataState };
    case SearchTypes.SEARCH_FAILURE:
      return { ...initialState, error: action.payload.error };
    default:
      return state;
  }
}
