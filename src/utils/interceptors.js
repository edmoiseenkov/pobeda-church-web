import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"

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
