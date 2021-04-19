import { Cast, Crew } from '../People';

export default interface CreditsResponse {
  id: number;
  cast: Cast[];
  crew: Crew[];
}
