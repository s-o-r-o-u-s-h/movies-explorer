import SearchTypes from '../types';
import axios from 'axios';
import { store } from '../../../utils/mockedStore';
import { searchMoviesThunkAction } from './searchMoviesThunkAction';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('searchMoviesThunkAction actions', () => {
  it('should create a search/success when fetching has been successfully done', function () {
    const expectedActions = [
      {
        type: SearchTypes.SEARCH_LOADING,
      },
      {
        type: SearchTypes.SEARCH_SUCCESS,
        payload: {
          data: [],
        },
      },
    ];
    const query = 'mocked string';

    const data = {
      data: { total_pages: 0, page: 0, total_results: 0, results: [] },
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    jest
      .spyOn(global, 'encodeURIComponent')
      .mockImplementationOnce(() => query);

    // @ts-ignore
    return store.dispatch(searchMoviesThunkAction(query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
