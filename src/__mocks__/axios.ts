import axios from 'axios';

const mockAxios = jest.genMockFromModule('axios') as jest.Mocked<typeof axios>;

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.interceptors.request.use = jest.fn();

export default mockAxios;
