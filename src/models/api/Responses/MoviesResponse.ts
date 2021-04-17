import { Movie } from '../Movie';

export default interface MoviesResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
