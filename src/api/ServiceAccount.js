import HttpClient from './HttpClient';
export default {
  login: (perosn) => HttpClient.post('accounts/login', perosn),
  getUser: () => HttpClient.get('accounts/user-info'),
  logOut: () => HttpClient.post('accounts/logout'),
};
