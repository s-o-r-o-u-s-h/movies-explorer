import customAxios from '../utils/customAxios';
import {
  MoviesResponse,
  CreditsResponse,
  MovieResponse,
} from '../models/api/Responses';

function api() {
  return {
    discover: () => {
      return customAxios
        .get<MoviesResponse>(`discover/movie`)
        .then(response => response.data);
    },
    getMovie: (id: number) => {
      return customAxios
        .get<MovieResponse>(`movie/${id}`)
        .then(response => response.data);
    },
    findMovies: (name: string) => {
      return customAxios
        .get<MoviesResponse>('search/movie', {
          params: {
            query: encodeURIComponent(name),
            include_adult: 'false',
          },
        })
        .then(response => response.data);
    },
    getMovieCredits: (movieId: number) => {
      return customAxios
        .get<CreditsResponse>(`movie/${movieId}/credits`)
        .then(response => response.data);
    },
  };
}

export default api;
