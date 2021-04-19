import { Movie } from './Movie';

type MoviePartial = Pick<
  Movie,
  'poster_path' | 'title' | 'release_date' | 'id'
>;

export default MoviePartial;
