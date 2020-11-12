import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

axios.defaults.baseURL = publicRuntimeConfig.strapiApi

axios.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    if (error.response) {
      console.error('error.response', error.response);
      throw error;
    }
  }
);
