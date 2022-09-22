import HttpClient from './HttpClient';
export default {
  khorasan: (webService) =>
    HttpClient.post('servicebus/serviceready', webService),
};
