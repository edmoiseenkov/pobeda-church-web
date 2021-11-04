import axios from 'axios';
import getConfig from 'next/config';
import camelcaseKeys from 'camelcase-keys';

const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = publicRuntimeConfig.strapiApi;

axios.interceptors.response.use(
  async (response) => {
    response.data = camelcaseKeys(response.data);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('error.response', error.response);
      throw error;
    }
  }
);
