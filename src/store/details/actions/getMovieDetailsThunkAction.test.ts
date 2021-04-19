import DetailsTypes from '../types';
import MovieDetailsRaw from '../../../models/MovieDetailsRaw';
import axios from 'axios';
import { store } from '../../../utils/mockedStore';
import { getMovieDetailsThunkAction } from './getMovieDetailsThunkAction';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getMovieDetailsThunkAction actions', () => {
  const mockedMovieResponse = {
    data: {
      adult: false,
      backdrop_path: 'mocked-string',
      belongs_to_collection: {
        id: 535313,
        name: 'mocked-string',
        poster_path: 'mocked-string',
        backdrop_path: 'mocked-string',
      },
      budget: 200000000,
      genres: [
        { id: 28, name: 'Action' },
        { id: 878, name: 'Science Fiction' },
      ],
      homepage: 'mocked-string',
      poster_path: 'mocked-path',
      release_date: '2021-02-01',
      runtime: 110,
      id: 399566,
      imdb_id: 'tt5034838',
      original_language: 'en',
      original_title: 'mocked-string',
      overview: 'mocked-overview',
      popularity: 5405.33,
      production_companies: [
        {
          id: 923,
          logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
          name: 'Legendary Pictures',
          origin_country: 'US',
        },
      ],
      production_countries: [{ name: 'USA', iso_3166_1: 'us' }],
      revenue: 358600000,
      spoken_languages: [
        { english_name: 'English', iso_639_1: 'en', name: 'English' },
      ],
      status: 'Released',
      tagline: 'mocked-string',
      title: 'mocked-string',
      video: false,
      vote_average: 8.3,
      vote_count: 4511,
    },
  };
  const data: MovieDetailsRaw = {
    movieItem: mockedMovieResponse.data,
    crew: [],
    cast: [],
  };
  it('should create a details/success when fetching has been successfully done', function () {
    const expectedActions = [
      {
        type: DetailsTypes.DETAILS_LOADING,
      },
      {
        type: DetailsTypes.DETAILS_SUCCESS,
        payload: {
          data,
        },
      },
    ];

    mockedAxios.get
      .mockResolvedValueOnce(mockedMovieResponse)
      .mockResolvedValueOnce({
        data: {
          id: 1,
          cast: [],
          crew: [],
        },
      });

    // @ts-ignore
    return store.dispatch(getMovieDetailsThunkAction(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
