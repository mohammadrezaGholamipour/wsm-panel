import HttpClient from './HttpClient';

export default {
  Login: (perosn) => HttpClient.post('auth/login', perosn),
  GetUser: () => HttpClient.get('auth/user-info'),
  LogOut: () => HttpClient.post('auth/logout'),
};
