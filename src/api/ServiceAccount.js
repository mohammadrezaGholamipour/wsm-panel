import HttpClient from './HttpClient';

export default {
  Login: (login) => HttpClient.post(`auth/login`, login),
  GetUser: () => HttpClient.get('auth/user-info'),
  LogOut: () => HttpClient.post('auth/logout'),
};
