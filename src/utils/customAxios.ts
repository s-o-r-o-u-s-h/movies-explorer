import axios from 'axios';

const customAxios = axios.create({
  baseURL: process.env['REACT_APP_TMDB_BASE_URL'],
});

customAxios.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: `bearer ${process.env['REACT_APP_TMDB_AUTHORIZATION_TOKEN']}`,
    },
  };
});

export default customAxios;
