import axios from 'axios';
import api from './index';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('app', () => {
  it('fetches sucessfully from discover movie API', async () => {
    const data = {
      data: { total_pages: 0, page: 0, total_results: 0, results: [] },
    };

    mockedAxios.get.mockResolvedValueOnce(data);

    await expect(api().discover()).resolves.toEqual(data.data);
    expect(mockedAxios.get).toHaveBeenCalledWith('discover/movie');
  });

  it('fetches with error from discover movie API', async () => {
    const data = {
      data: { status_message: 'something went wrong', status_code: 500 },
    };
    mockedAxios.get.mockRejectedValueOnce(data);

    await expect(api().discover()).rejects.toEqual(data);
  });

  it('fetches sucessfully from get movie API', async () => {
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
        id: 399566,
        imdb_id: 'tt5034838',
        original_language: 'en',
        original_title: 'mocked-string',
        overview: 'mocked-string',
        popularity: 5405.33,
        poster_path: 'mocked-string',
        production_companies: [
          {
            id: 923,
            logo_path: '/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png',
            name: 'Legendary Pictures',
            origin_country: 'US',
          },
        ],
        production_countries: [{ iso_3166_1: 'US', name: 'mocked-string' }],
        release_date: '2021-03-24',
        revenue: 358600000,
        runtime: 113,
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
    const movideId = 1;

    mockedAxios.get.mockResolvedValueOnce(mockedMovieResponse);

    await expect(api().getMovie(movideId)).resolves.toEqual(
      mockedMovieResponse.data,
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(`movie/${movideId}`);
  });

  it('fetches with error from get movie API', async () => {
    const data = {
      data: { status_message: 'something went wrong', status_code: 500 },
    };
    const movideId = 1;

    mockedAxios.get.mockRejectedValueOnce(data);

    await expect(api().getMovie(movideId)).rejects.toEqual(data);
  });

  it('fetches sucessfully from search movie API', async () => {
    const data = {
      data: { total_pages: 0, page: 0, total_results: 0, results: [] },
    };
    const query = 'mocked string';

    mockedAxios.get.mockResolvedValueOnce(data);
    jest
      .spyOn(global, 'encodeURIComponent')
      .mockImplementationOnce(() => query);

    await expect(api().findMovies(query)).resolves.toEqual(data.data);
    expect(mockedAxios.get).toHaveBeenCalledWith(`search/movie`, {
      params: {
        include_adult: 'false',
        query,
      },
    });
  });

  it('fetches with error from search movie API', async () => {
    const data = {
      data: { status_message: 'something went wrong', status_code: 500 },
    };
    const query = 'mocked-string';

    mockedAxios.get.mockRejectedValueOnce(data);

    await expect(api().findMovies(query)).rejects.toEqual(data);
  });

  it('fetches sucessfully from get movie credits API', async () => {
    const mockedMovieResponse = {
      data: {
        id: 1,
        cast: [
          {
            adult: false,
            gender: 2,
            id: 287,
            name: 'Brad Pitt',
            original_name: 'Brad Pitt',
            popularity: 20.431,
            character: 'Tyler Durden',
            credit_id: '52fe4250c3a36847f80149f7',
            order: 1,
          },
        ],
        crew: [],
      },
    };
    const movideId = 1;

    mockedAxios.get.mockResolvedValueOnce(mockedMovieResponse);

    await expect(api().getMovieCredits(movideId)).resolves.toEqual(
      mockedMovieResponse.data,
    );
    expect(mockedAxios.get).toHaveBeenCalledWith(`movie/${movideId}/credits`);
  });

  it('fetches with error from get movie credits API', async () => {
    const data = {
      data: {
        status_message: 'The resource you requested could not be found.',
        status_code: 404,
      },
    };
    const movideId = 1;

    mockedAxios.get.mockRejectedValueOnce(data);

    await expect(api().getMovieCredits(movideId)).rejects.toEqual(data);
  });
});
