import axios from 'axios';
import TrendsTypes from '../types';
import { store } from '../../../utils/mockedStore';
import { getTrendsThunkAction } from './getTrendsThunkAction';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getTrendsThunkAction actions', () => {
  it('should create a trends/success when fetching has been successfully done', () => {
    const expectedActions = [
      {
        type: TrendsTypes.TRENDS_LOADING,
      },
      {
        type: TrendsTypes.TRENDS_SUCCESS,
        payload: {
          data: [],
        },
      },
    ];

    const data = {
      data: { total_pages: 0, page: 0, total_results: 0, results: [] },
    };
    mockedAxios.get.mockResolvedValueOnce(data);

    // @ts-ignore
    return store.dispatch(getTrendsThunkAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
