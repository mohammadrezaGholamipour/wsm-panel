import HttpClient from './HttpClient';

export default {
  Login: (login) => HttpClient.post(`servicebus/serviceready`, login),
};
