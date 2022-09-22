import { APIBASEPATH } from '../config/config.js';
import AuthService from '../api/auth.js';
import { useRouter } from 'vue-router';
import axios from 'axios';
const Router = useRouter();
const HttpClient = axios.create({
  baseURL: APIBASEPATH, // 'http://alhadi2:5000/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
HttpClient.interceptors.request.use(
  (config) => {
    //const Token = AuthService.getToken();
    //if (Token) {
    //  config.headers['authorization'] = `Bearer ${Token}`;
    // }
    return config;
  },
  (error) => {
    console.log(error.message);
  }
);
HttpClient.interceptors.response.use(
  (response) => {
    const { code, message } = response.data;
    return response.data || null;
  },
  async (error) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          break;
        case 401:
          if (!error.config.url.endsWith('/login')) {
            Router.replace('/login');
          }
          break;
        case 403:
          break;
        case 404:
          console.log('404');
          break;
        case 500:
          console.log('500');
          break;
        case 501:
          console.log('501');
          break;
      }
    } else {
    }
    return Promise.reject(error);
  }
);
export default HttpClient;
