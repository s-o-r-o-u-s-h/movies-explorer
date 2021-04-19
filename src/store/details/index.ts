import { DetailsActionTypes } from './actions/creators';
import { MovieInfo } from '../../models/MovieInfo';
import DetailsTypes from './types';
import { JobEnum } from '../../models/api/People';

export interface DetailsState {
  loading: boolean;
  item: MovieInfo | null;
  error: string;
}

const initialState: DetailsState = {
  loading: false,
  error: '',
  item: null,
};

export default function detailsReducer(
  state = initialState,
  action: DetailsActionTypes,
): DetailsState {
  switch (action.type) {
    case DetailsTypes.DETAILS_LOADING:
      return { ...initialState, loading: true };
    case DetailsTypes.DETAILS_SUCCESS:
      const { movieItem, cast, crew } = action.payload.data;

      const actors = cast.map(actor => actor.name).join(', ');
      const directors = crew
        .filter(item => item.job === JobEnum.director)
        .map(director => director.name)
        .join(', ');
      const genre = movieItem.genres.map(i => i.name).join(', ');
      const country = movieItem.production_countries
        .map(country => country.name)
        .join(', ');

      const item: MovieInfo = {
        title: movieItem.title,
        image: movieItem.poster_path
          ? process.env['REACT_APP_TMDB_IMG_URL'] + movieItem.poster_path
          : (process.env['REACT_APP_FALLBACK_IMAGE_URL'] as string),
        cast: actors,
        director: directors,
        summary: movieItem.overview,
        genre,
        duration: movieItem.runtime + ' minutes',
        year: movieItem.release_date.split('-')[0] || 'Unknown',
        country,
      };

      return { ...initialState, item };
    case DetailsTypes.DETAILS_FAILURE:
      return { ...initialState, error: action.payload.error };
    default:
      return state;
  }
}
