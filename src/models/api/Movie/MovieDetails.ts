import { Genre } from '../Genre';
import ProductionCompany from '../ProductionCompany';
import ProductionCountry from '../ProductionCountry';
import SpokenLanguage from '../SpokenLanguage';
import MovieStatusEnum from './MovieStatusEnum';
import BaseMovie from './BaseMovie';

export default interface MovieDetails extends BaseMovie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: MovieStatusEnum;
  tagline: string;
}
