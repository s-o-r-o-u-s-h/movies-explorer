import { MovieDetails } from './api/Movie';
import { Cast, Crew } from './api/People';

export default interface MovieDetailsRaw {
  movieItem: Pick<
    MovieDetails,
    | 'genres'
    | 'title'
    | 'production_countries'
    | 'poster_path'
    | 'overview'
    | 'runtime'
    | 'release_date'
  >;
  cast: Cast[];
  crew: Crew[];
}
