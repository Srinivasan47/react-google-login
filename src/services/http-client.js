/* eslint-disable no-param-reassign */
import axios from 'axios';
// Define the constants
export const BASE_URL = 'https://localhost/tmas/TMASAPI';
function getLocalAccessToken() {
  const accessToken = window.localStorage.getItem('token');
  return accessToken;
}
// Define the httpClient as axios
const httpClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

httpClient.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers.authorization = `bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    // const originalConfig = err.config;
    if (err.response) {
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);
export default httpClient;
